const toString = Object.prototype.toString;

/**
 * get value type
 * @param value
 */
const getTag = (value: any): string => {
  if (value == null) {
    return value === undefined ? "[object Undefined]" : "[object Null]";
  }
  return toString.call(value);
};
export default getTag;
