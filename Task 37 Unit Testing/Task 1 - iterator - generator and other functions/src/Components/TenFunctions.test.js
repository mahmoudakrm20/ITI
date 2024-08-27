import {
  add,
  subtract,
  multiply,
  divide,
  repeatOperation,
  power,
  factorial,
  fibonacci,
  mergeSort,
  Calculator,
} from "./TenFunctions";

describe("Math Functions", () => {
  test("addition of two numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test("subtraction of two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(3, 5)).toBe(-2);
  });

  test("multiplication of two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
  });

  test("division of two numbers", () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(-6, -3)).toBe(2);
    expect(() => divide(1, 0)).toThrow("Division by zero is not allowed");
  });

  test("repeat operation", () => {
    const increment = (x) => x + 1;
    expect(repeatOperation(increment, 3, 0)).toBe(3);
    expect(repeatOperation(increment, 0, 5)).toBe(5);
  });

  test("power of a number", () => {
    expect(power(2, 3)).toBe(8);
    expect(power(5, 0)).toBe(1);
  });

  test("factorial of a number", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
    expect(factorial(-1)).toBe("Invalid input");
  });

  test("fibonacci sequence", () => {
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(10)).toBe(55);
  });

  test("merge sort", () => {
    expect(mergeSort([3, 1, 4, 1, 5, 9])).toEqual([1, 1, 3, 4, 5, 9]);
    expect(mergeSort([10, 2, 8, 6, 7, 5])).toEqual([2, 5, 6, 7, 8, 10]);
  });

  test("Calculator class", () => {
    const calc = new Calculator();
    expect(calc.add(5).subtract(2).multiply(3).divide(1).getResult()).toBe(9);
    expect(calc.reset().add(10).getResult()).toBe(10);
    expect(() => calc.divide(0)).toThrow("Division by zero is not allowed");
  });
});
