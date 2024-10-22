import isParamEmpty from "../src/is-param-empty";

describe("isParamEmpty", () => {
  it("should return true when value is value or undefined", () => {
    expect(isParamEmpty(null)).toBeTruthy();
    expect(isParamEmpty(undefined)).toBeTruthy();
  });
  it("should return false when value is number or boolean", () => {
    expect(isParamEmpty(123)).toBeFalsy();
    expect(isParamEmpty(0)).toBeFalsy();
    expect(isParamEmpty(true)).toBeFalsy();
    expect(isParamEmpty(false)).toBeFalsy();
  });
  it("should return true when value is NaN", () => {
    expect(isParamEmpty(Number.NaN)).toBeTruthy();
  });
  it("should return true when value is string and all space", () => {
    expect(isParamEmpty("   ")).toBeTruthy();
    expect(isParamEmpty(" abc  ")).toBeFalsy();
  });
  it("should check length when value is array", () => {
    expect(isParamEmpty([])).toBeTruthy();
    expect(isParamEmpty([1, 2])).toBeFalsy();
  });
  it("should check key sizes when value is object", () => {
    expect(isParamEmpty({})).toBeTruthy();
    expect(isParamEmpty({ a: 1 })).toBeFalsy();
  });
  it("should check size when value is map or set", () => {
    expect(isParamEmpty(new Map())).toBeTruthy();
    expect(isParamEmpty(new Set())).toBeTruthy();

    const map = new Map();
    map.set("a", 1);
    const set = new Set();
    set.add("abc");

    expect(isParamEmpty(map)).toBeFalsy();
    expect(isParamEmpty(set)).toBeFalsy();
  });
});
