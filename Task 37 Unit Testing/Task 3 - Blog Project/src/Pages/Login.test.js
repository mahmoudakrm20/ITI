import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "./Login";
import { useAuth } from "../contexts/authContext";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/auth";

jest.mock("../firebase/auth");
jest.mock("../contexts/authContext", () => ({
  useAuth: jest.fn(),
}));

describe("Login", () => {
  beforeEach(() => {
    useAuth.mockReturnValue({
      userLoggedIn: false,
    });
    doSignInWithEmailAndPassword.mockResolvedValue({});
    doSignInWithGoogle.mockResolvedValue({});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render the login form", () => {
    render(<Login />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
    expect(screen.getByText(/continue with google/i)).toBeInTheDocument();
  });

  test("should handle email and password login", async () => {
    render(<Login />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByText(/sign in/i));

    await waitFor(() => {
      expect(doSignInWithEmailAndPassword).toHaveBeenCalledWith(
        "test@example.com",
        "password123"
      );
    });
  });

  test("should handle Google login", async () => {
    render(<Login />);

    fireEvent.click(screen.getByText(/continue with google/i));

    await waitFor(() => {
      expect(doSignInWithGoogle).toHaveBeenCalled();
    });
  });

  test("should show error message if login fails", async () => {
    const errorMessage = "Login failed";
    doSignInWithEmailAndPassword.mockRejectedValueOnce(new Error(errorMessage));

    render(<Login />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByText(/sign in/i));

    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });

  test("should redirect to home if user is logged in", () => {
    useAuth.mockReturnValue({
      userLoggedIn: true,
    });

    render(<Login />);

    expect(screen.queryByText(/welcome to venture/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument();
    // Check if Navigate is used for redirection
    expect(screen.getByRole("alert")).toHaveTextContent("Redirected to home");
  });
});
