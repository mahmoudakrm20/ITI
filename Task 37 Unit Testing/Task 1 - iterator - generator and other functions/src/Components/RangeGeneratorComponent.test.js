import { rangeGenerator } from "./RangeGenerator";

describe("rangeGenerator", () => {
  test("generates the correct range of numbers", () => {
    const generator = rangeGenerator(0, 10, 1);
    const values = [...generator];
    expect(values).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("yields values one at a time", () => {
    const generator = rangeGenerator(1, 10, 1);
    expect(generator.next().value).toBe(1);
    expect(generator.next().value).toBe(2);
    expect(generator.next().value).toBe(3);
  });
});
