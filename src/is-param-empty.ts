import getTag from "./get-tag";
import isPlainObject from "./is-plain-object";

/**
 * 判断参数是否为空
 * 这里与 lodash 的 isEmpty 不同，这里的number, boolean等类型的数据，认为是非空
 */
const isParamEmpty = (value: any) => {
  if (value == null) {
    return true;
  }
  if (typeof value === "number") {
    /**
     * 若是NaN，则认为是空；
     * 0是合法的
     */
    return value !== value;
  }
  if (typeof value === "string") {
    return value.trim() === "";
  }
  if (Array.isArray(value)) {
    return !value.length;
  }
  const tag = getTag(value);
  if (tag == "[object Map]" || tag == "[object Set]") {
    return !value.size;
  }
  if (isPlainObject(value)) {
    return !Object.keys(value).length;
  }

  return false;
};

export default isParamEmpty;
