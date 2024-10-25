import getTag from "./get-tag";
import isNil from "./is-nil";
import isPlainObject from "./is-plain-object";

/**
 * get value children length, if value is null or undefined return 0
 */
const size = (value: any) => {
  if (isNil(value)) {
    return 0;
  }
  if (typeof value === "string" || Array.isArray(value)) {
    return value.length;
  }
  const tag = getTag(value);
  if (tag == "[object Map]" || tag == "[object Set]") {
    return value.size;
  }
  if (isPlainObject(value)) {
    return Object.keys(value).length;
  }
  return 0;
};
export default size;
