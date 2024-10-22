import trimData from "../src/trim-data";

describe("trimData", () => {
  it("should return original data when data is falsly", () => {
    expect(trimData(false)).toBeFalsy();
    expect(trimData(null)).toBeNull();
    expect(trimData(undefined)).toBeUndefined();
    expect(trimData("")).toBe("");
  });
  it("should trim begin and end empty space when data is string", () => {
    expect(trimData("abc")).toBe("abc");
    expect(trimData(" abc")).toBe("abc");
    expect(trimData("abc ")).toBe("abc");
    expect(trimData(" abc ")).toBe("abc");
    expect(trimData("  a b c   ")).toBe("a b c");
  });
  it("should trim every item when data is array", () => {
    expect(trimData(["abc", " abc", "abc  ", "  abc  ", 123])).toEqual( ["abc", "abc", "abc", "abc", 123]);
  });
  it("should trim every key when data is plain object", () => {
    expect(trimData({ a: 123, b: " ac", c: "ab ", d: true, e: "  a b c  " })).toEqual( {"a": 123, "b": "ac", "c": "ab", "d": true, "e": "a b c"});
  });
});