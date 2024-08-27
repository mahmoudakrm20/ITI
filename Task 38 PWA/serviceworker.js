const filesToCache = [
  "index.html",
  "offline.html",
  "CSS/main.css",
  "online.html",
];

const dynamicCacheName = `Pages-${new Date().getTime()}`;

self.addEventListener("install", (event) => {
  console.log("service worker installation....", event);
  event.waitUntil(
    caches.open(dynamicCacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener("activate", (event) => {
  console.log("activating service worker ", event);
});
self.addEventListener("fetch", (event) => {
  console.log("Fetching page:", event.request.url);

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.status === 404) {
          console.log("Page not found, serving online.html.");
          return caches.match("online.html");
        }
        return response;
      })
      .catch(() => {
        console.log("Network request failed, serving offline.html");
        return caches.match("offline.html");
      })
  );
});
