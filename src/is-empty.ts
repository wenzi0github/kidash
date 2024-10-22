import getTag from "./get-tag";
import isPlainObject from "./is-plain-object";

const MAX_SAFE_INTEGER = 9007199254740991;

const isLength = (value: any) => {
  return typeof value === "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
};

const isArrayLike = (value: any) => {
  return value != null && typeof value !== "function" && isLength(value.length);
};

/**
 * check value is empty
 * 检查 value 是否为一个空对象，集合，映射或者 set。 判断的依据是除非是有枚举属性的对象，length 大于 0 的 arguments object, array, string
 * @param value
 */
const isEmpty = (value: any) => {
  if (value == null) {
    return true;
  }
  if (typeof value === "number") {
    // 若是NaN，则认为是空
    return value !== value;
  }
  if (isArrayLike(value) && (Array.isArray(value) || typeof value === "string")) {
    return !value.length;
  }
  const tag = getTag(value);
  if (tag == "[object Map]" || tag == "[object Set]") {
    return !value.size;
  }
  if (isPlainObject(value)) {
    try {
      return !Object.keys(value).length;
    } catch (err) {}
    return false;
  }
  /**
   * why boolean, number is not empty?
   * @see https://github.com/lodash/lodash/issues/496
   */
  return true;
};
export default isEmpty;
