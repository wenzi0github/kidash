import getTag from "./get-tag";

const isEqual = (value: any, other: any) => {
  if (value === other) {
    return true;
  }

  const valueType = getTag(value);
  const otherType = getTag(other);

  if (valueType !== otherType) {
    // 两者的类型不同，直接返回false
    return false;
  }

  if (valueType === "[object Array]") {
    const { length } = value;
    if (length !== other.length) {
      // 两者的长度不同，直接返回false
      return false;
    }
    for (let i = 0; i < length; i++) {
      if (!isEqual(value[i], other[i])) {
        return false;
      }
    }
    return true;
  }
  if (valueType === "[object Object]") {
    if (Object.keys(value).length !== Object.keys(other).length) {
      return false;
    }

    for (const key in value) {
      if (!isEqual(value[key], other[key])) {
        return false;
      }
    }
    return true;
  }
  return value === other;
};
export default isEqual;
