import covertNumToMaxSize from "../src/lib/covert-num-to-max-size";

describe("test covertNumToMaxSize", () => {
  test("should get zero when param is not number", () => {
    expect(covertNumToMaxSize(null as any)).toBe(0);
    expect(covertNumToMaxSize("234" as any)).toBe(0);
  });
  test("should return original num when not greater", () => {
    expect(covertNumToMaxSize(123)).toBe(123);
  });
  test("should one decimal", () => {
    expect(covertNumToMaxSize(1234567)).toBe("123.5万");
  });
  test("should give up last decimal zero", () => {
    expect(covertNumToMaxSize(10345)).toBe("1万");
  });
  test("should get max size", () => {
    expect(covertNumToMaxSize(1367892445)).toBe("13.7亿");
  });
  test("should get two decimal when last num is not zero", () => {
    expect(covertNumToMaxSize(1234567, { decimal: 2 })).toBe("123.46万");
  });
  test("should get one decimal when last num is zero although config decimal is 2", () => {
    expect(covertNumToMaxSize(1234017, { decimal: 2 })).toBe("123.4万");
  });
  test("should get two decimal although last num is zero when strict is true", () => {
    expect(covertNumToMaxSize(1234017, { decimal: 2, strict: true })).toBe("123.40万");
  });
  test("should get thousandth", () => {
    // 千分位
    expect(covertNumToMaxSize(1234)).toBe("1,234");
  });
  test("should not get thousandth when config.thousandth is false", () => {
    // 千分位
    expect(covertNumToMaxSize(1234, { thousandth: false })).toBe(1234);
  });
  test("should not get unit when config.unit is false", () => {
    expect(covertNumToMaxSize(1234017, { unit: false })).toBe(123.4);
  });
  test("diy sizes", () => {
    expect(
      covertNumToMaxSize(1234017, {
        sizes: [
          [0, ""],
          [1024, "KB"],
          [1024 * 1024, "MB"],
        ],
      })
    ).toBe("1.2MB");
  });
});
