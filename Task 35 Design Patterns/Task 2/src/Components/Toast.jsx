import { useEffect } from "react";
import "./Toast.css";

const Toast = ({ message, type, onRemove }) => {
  useEffect(() => {
    const timer = setTimeout(onRemove, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <div className={`toast ${type}`}>
      <span>{message}</span>
    </div>
  );
};

export default Toast;
