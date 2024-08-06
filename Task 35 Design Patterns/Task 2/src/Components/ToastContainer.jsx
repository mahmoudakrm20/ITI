import { useState, useEffect } from "react";
import Toast from "./Toast";
import "./Toast.css";

const listeners = new Set();

export const addToast = (message, type = "default") => {
  const id = Date.now();
  listeners.forEach((listener) => listener({ id, message, type }));
  return id;
};

export const removeAllToasts = () => {
  listeners.forEach((listener) => listener({ removeAll: true }));
};

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const listener = (toast) => {
      if (toast.removeAll) {
        setToasts([]);
      } else {
        setToasts((prev) => [...prev, toast]);
        setTimeout(() => {
          setToasts((prev) => prev.filter((t) => t.id !== toast.id));
        }, 2000);
      }
    };

    listeners.add(listener);
    return () => listeners.delete(listener);
  }, []);

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onRemove={() =>
            setToasts((prev) => prev.filter((t) => t.id !== toast.id))
          }
        />
      ))}
    </div>
  );
};

export default ToastContainer;
