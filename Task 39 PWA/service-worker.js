const cachedItems = "todo-app-cache-v1";
const cachedURL = [
  "/",
  "/index.html",
  "/style.css",
  "/js/main.js",
  "/js/idb.js",
  "/manifest.json",
  "/images/notificationFlat.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cachedItems).then((cache) => {
      return cache.addAll(cachedURL);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [cachedItems];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("message", function (e) {
  if (e.data === "start") {
    checkTasks();
    setInterval(checkTasks, 60000);
  }
});

function checkTasks() {
  const dbPromise = idb.open("ToDoList", 2, function (db) {
    if (!db.objectStoreNames.contains("task")) {
      db.createObjectStore("task", { keyPath: "id" });
    }
  });

  dbPromise
    .then((db) => {
      var tx = db.transaction("task", "readonly");
      var store = tx.objectStore("task");
      return store.getAll();
    })
    .then((tasks) => {
      const now = new Date();
      tasks.forEach((task) => {
        var taskDate = new Date(
          task.year,
          new Date(Date.parse(task.month + " 1")).getMonth(),
          task.day,
          task.hours,
          task.minutes
        );
        if (now >= taskDate && !task.notified) {
          self.postMessage({
            type: "notify",
            title: task.title,
            id: task.id,
          });
        }
      });
    })
    .catch((err) => {
      console.error("Error checking tasks in worker:", err);
    });
}
