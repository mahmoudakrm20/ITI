import { rangeIterator } from "./RangeIterator";

describe("rangeIterator", () => {
  test("iterates over the correct range of numbers", () => {
    const iterator = rangeIterator(0, 10, 1);
    const values = [...iterator];
    expect(values).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("yields values one at a time", () => {
    const iterator = rangeIterator(1, 10, 1);

    expect(iterator.next().value).toBe(1);
    expect(iterator.next().value).toBe(2);
    expect(iterator.next().value).toBe(3);
    expect(iterator.next().value).toBe(4);
    expect(iterator.next().value).toBe(5);
    expect(iterator.next().value).toBe(6);
    expect(iterator.next().value).toBe(7);
    expect(iterator.next().value).toBe(8);
    expect(iterator.next().value).toBe(9);

    expect(iterator.next().done).toBe(true);
  });
});
