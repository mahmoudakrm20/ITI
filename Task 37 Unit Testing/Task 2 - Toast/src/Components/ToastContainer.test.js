import { addToast, removeAllToasts, listeners } from "./ToastContainer"; // Adjust the path as necessary

describe("Toast functions", () => {
  let mockListener;

  beforeEach(() => {
    // Create a mock function for the listener
    mockListener = jest.fn();
    // Clear existing listeners before each test
    listeners.clear();
    // Add the mock listener
    listeners.add(mockListener);
  });

  test("addToast should call listeners with the correct arguments", () => {
    const message = "Test Toast";
    const type = "success";

    // Call addToast
    addToast(message, type);

    // Check that mockListener was called with the correct arguments
    expect(mockListener).toHaveBeenCalledWith(
      expect.objectContaining({
        id: expect.any(Number), // The ID will be a timestamp, so use any
        message,
        type,
      })
    );
  });

  test("removeAllToasts should call listeners with removeAll flag", () => {
    // Call removeAllToasts
    removeAllToasts();

    // Check that mockListener was called with removeAll flag
    expect(mockListener).toHaveBeenCalledWith({ removeAll: true });
  });
});
