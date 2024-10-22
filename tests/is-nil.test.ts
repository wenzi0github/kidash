import isNil from "../src/is-nil";

describe("isNil", () => {
  test("should return true for null and undefined", () => {
    expect(isNil(null)).toBeTruthy();
    expect(isNil(undefined)).toBeTruthy();
  });
  test("should return false for other values", () => {
    expect(isNil(0)).toBeFalsy();
    expect(isNil("")).toBeFalsy();
    expect(isNil([])).toBeFalsy();
    expect(isNil({})).toBeFalsy();
    expect(isNil(false)).toBeFalsy();
  });
});
