import size from "../src/lib/size";

describe("size", () => {
  test("should return the length of an array or string", () => {
    expect(size([1, 2, 3])).toBe(3);
    expect(size("abcde")).toBe(5);
  });
  test("should return the number of own enumerable properties of an object", () => {
    expect(size({ a: 1, b: 2, c: 3 })).toBe(3);
  });
  test("should return 0 for an empty collection", () => {
    expect(size(null)).toBe(0);
    expect(size(undefined)).toBe(0);
    expect(size(4567)).toBe(0);
  });
  test("should return 0 for boolean function etc", () => {
    expect(size(true)).toBe(0);
    expect(size(false)).toBe(0);
    expect(size(() => {})).toBe(0);
  });
});
