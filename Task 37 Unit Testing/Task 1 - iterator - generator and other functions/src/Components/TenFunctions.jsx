// Addition
export function add(a, b) {
  return a + b;
}

// Subtraction
export function subtract(a, b) {
  return a - b;
}

// Multiplication
export function multiply(a, b) {
  return a * b;
}

// Division
export function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

// Loop function
export function repeatOperation(operation, times, initial) {
  let result = initial;
  for (let i = 0; i < times; i++) {
    result = operation(result);
  }
  return result;
}

// Power
export function power(base, exponent) {
  return Math.pow(base, exponent);
}

export function factorial(n) {
  if (n < 0) return "Invalid input"; // Factorial
  return n === 0 ? 1 : n * factorial(n - 1);
}

export function fibonacci(n) {
  if (n < 0) return "Invalid input"; // Fibonacci
  let a = 0,
    b = 1,
    temp;
  for (let i = 0; i < n; i++) {
    temp = a;
    a = b;
    b = temp + b;
  }
  return a;
}

export function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

export class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a) {
    this.result += a;
    return this;
  }

  subtract(a) {
    this.result -= a;
    return this;
  }

  multiply(a) {
    this.result *= a;
    return this;
  }

  divide(a) {
    if (a === 0) throw new Error("Division by zero is not allowed");
    this.result /= a;
    return this;
  }

  getResult() {
    return this.result;
  }

  reset() {
    this.result = 0;
    return this;
  }
}
