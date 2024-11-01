import isEqual from "../src/is-equal";

describe("isEqual", () => {
  it("should return true when value and other is the same", () => {
    expect(isEqual(1, 1)).toBeTruthy();
    expect(isEqual(true, true)).toBeTruthy();
    expect(isEqual("abc", "abc")).toBeTruthy();
    expect(isEqual("abc", "123")).toBeFalsy();
    expect(isEqual(123, "123")).toBeFalsy();
  });
  it("should check every item when value is array", () => {
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBeTruthy();
    expect(isEqual([1, 2, 3], [1, 2, 3, 4])).toBeFalsy();
    expect(isEqual([1, 2, 3], [1, 2, 4])).toBeFalsy();
    expect(isEqual([1, 2, [3, "a"]], [1, 2, [3, "a"]])).toBeTruthy();
  });
  it("should check every item when value is object", () => {
    expect(isEqual({ a: 1 }, { a: 1 })).toBeTruthy();
    expect(isEqual({ a: 1 }, { a: 1, b: 2 })).toBeFalsy();
    expect(isEqual({ a: 1 }, { a: 2 })).toBeFalsy();
    expect(isEqual({ a: [1, 2, 3] }, { a: [1, 2, 3] })).toBeTruthy();
  });
});
