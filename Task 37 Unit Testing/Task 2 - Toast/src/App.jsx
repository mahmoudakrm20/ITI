import ToastContainer, {
  addToast,
  removeAllToasts,
} from "./Components/ToastContainer";

const App = () => (
  <div>
    <button onClick={() => addToast("toast message")}>
      Show Default Toast
    </button>
    <button onClick={() => addToast("Success toast ", "success")}>
      Show Success Toast
    </button>
    <button onClick={() => addToast("Error toast ", "error")}>
      Show Error Toast
    </button>
    <button onClick={() => removeAllToasts()}>Dismiss All Toasts</button>
    <ToastContainer />
  </div>
);

export default App;
