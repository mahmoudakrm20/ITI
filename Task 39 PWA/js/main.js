var idbApp = (function () {
  "use strict";

  var dbPromise = idb.open("ToDoList", 2, function (db) {
    if (!db.objectStoreNames.contains("task")) {
      db.createObjectStore("task", { keyPath: "id" });
    }
  });

  if (!("Notification" in window)) return;

  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }

  function addTask() {
    const titleInput = document.getElementById("title");
    const titleError = document.getElementById("title-error");
    const title = titleInput.value.trim();

    if (title === "") {
      titleError.style.display = "inline";
      titleInput.focus();
      return;
    } else {
      titleError.style.display = "none";
    }

    let hours = parseInt(document.getElementById("hours").value);
    const minutes = parseInt(document.getElementById("minutes").value);
    const amPm = document.getElementById("amPm").value;

    if (amPm === "PM" && hours < 12) {
      hours += 12;
    } else if (amPm === "AM" && hours === 12) {
      hours = 0;
    }

    var newTodo = {
      id: Date.now(),
      title: title,
      hours: hours,
      minutes: minutes,
      day: parseInt(document.getElementById("day").value),
      month: document.getElementById("month").value,
      year: parseInt(document.getElementById("year").value),
      completed: false,
      notified: false,
    };

    dbPromise
      .then((db) => {
        var tx = db.transaction("task", "readwrite");
        var store = tx.objectStore("task");
        return store.add(newTodo);
      })
      .then(() => {
        console.log("Task added successfully");
        showTodo();
      })
      .catch((err) => {
        console.error("Error adding task:", err);
        alert("Failed to add task. Please try again.");
      });
  }

  function showTodo() {
    var s = "";
    dbPromise
      .then((db) => {
        var tx = db.transaction("task", "readonly");
        var store = tx.objectStore("task");

        return store.getAll();
      })
      .then((items) => {
        if (items.length === 0) {
          s = "<p>No Tasks</p>";
        } else {
          s = '<ul class="task-list">';
          items.forEach((item) => {
            s += `<li data-id="${item.id}" class="${
              item.completed ? "completed" : ""
            }">
                           ${item.title} - ${item.hours % 12 || 12}:${
              item.minutes
            } ${item.hours >= 12 ? "PM" : "AM"} ${item.day} ${item.month} ${
              item.year
            }
                           <button class="delete-btn" data-id="${
                             item.id
                           }">✖</button>
                        </li>`;
          });
          s += "</ul>";
        }
        document.getElementById("add-item").innerHTML = s;

        document
          .getElementById("add-item")
          .addEventListener("click", function (event) {
            if (event.target.classList.contains("delete-btn")) {
              var id = event.target.getAttribute("data-id");
              deleteTask(Number(id));
            } else if (event.target.tagName === "LI") {
              toggleTaskCompletion(event.target.getAttribute("data-id"));
            }
          });
      })
      .catch((err) => {
        console.log("Error fetching tasks:", err);
        document.getElementById("add-item").innerHTML =
          "<p>Error retrieving data.</p>";
      });
  }

  function toggleTaskCompletion(id) {
    dbPromise
      .then((db) => {
        var tx = db.transaction("task", "readwrite");
        var store = tx.objectStore("task");
        return store.get(Number(id));
      })
      .then((task) => {
        task.completed = !task.completed;
        return dbPromise
          .then((db) => {
            var tx = db.transaction("task", "readwrite");
            var store = tx.objectStore("task");
            return store.put(task);
          })
          .then(() => {
            const taskItem = document.querySelector(`li[data-id='${id}']`);
            if (taskItem) {
              task.completed
                ? taskItem.classList.add("completed")
                : taskItem.classList.remove("completed");
            }
          });
      })
      .catch((err) => {
        console.log("Error toggling task completion status:", err);
      });
  }

  function deleteTask(id) {
    dbPromise
      .then((db) => {
        var tx = db.transaction("task", "readwrite");
        var store = tx.objectStore("task");
        return store.delete(id);
      })
      .then(() => {
        console.log("Task deleted successfully");
        showTodo();
      })
      .catch((err) => {
        console.log("Error deleting task:", err);
      });
  }

  function showNotification(taskTitle) {
    new Notification("Reminder: " + taskTitle, {
      body: "It’s time to start your task!",
      icon: "../images/notificationFlat.png",
    });
  }

  function checkForDueTasks() {
    var now = new Date();

    dbPromise
      .then((db) => {
        var tx = db.transaction("task", "readonly");
        var store = tx.objectStore("task");

        return store.getAll();
      })
      .then((tasks) => {
        tasks.forEach((task) => {
          var taskDate = new Date(
            task.year,
            new Date(Date.parse(task.month + " 1")).getMonth(),
            task.day,
            task.hours,
            task.minutes
          );
          if (now >= taskDate && !task.notified) {
            showNotification(task.title);

            task.notified = true;
            dbPromise.then((db) => {
              var tx = db.transaction("task", "readwrite");
              var store = tx.objectStore("task");
              return store.put(task);
            });
          }
        });
      })
      .catch((err) => {
        console.log("Error checking tasks:", err);
      });
  }

  setInterval(checkForDueTasks, 60000);

  return {
    dbPromise: dbPromise,
    addTask: addTask,
    showTodo: showTodo,
    deleteTask: deleteTask,
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  let currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentDay = now.getDate();
  const currentMonth = now.toLocaleString("default", { month: "long" });
  const currentYear = now.getFullYear();

  const amPm = currentHours >= 12 ? "PM" : "AM";
  currentHours = currentHours % 12 || 12;

  document.getElementById("hours").value = currentHours;
  document.getElementById("minutes").value = currentMinutes;
  document.getElementById("day").value = currentDay;
  document.getElementById("month").value = currentMonth;
  document.getElementById("year").value = currentYear;
  document.getElementById("amPm").value = amPm;

  idbApp.showTodo();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../service-worker.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  });
}

// dom

document.addEventListener("DOMContentLoaded", () => {
  const daySelect = document.getElementById("day");
  const monthSelect = document.getElementById("month");
  const yearSelect = document.getElementById("year");

  for (let i = 1; i <= 31; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    daySelect.appendChild(option);
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  months.forEach((month) => {
    const option = document.createElement("option");
    option.value = month;
    option.textContent = month;
    monthSelect.appendChild(option);
  });

  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i <= currentYear + 10; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
  }

  const now = new Date();
  daySelect.value = now.getDate();
  monthSelect.value = months[now.getMonth()];
  yearSelect.value = currentYear;
});
