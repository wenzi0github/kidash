const isEqual = (value: any, other: any) => {
  if (value === other) {
    return true;
  }

  const valueType: string = Object.prototype.toString.call(value);
  const otherType: string = Object.prototype.toString.call(other);
  if (valueType !== otherType) {
    return false;
  }

  if (valueType === "[object Array]") {
    const { length } = value;
    if (length !== other.length) {
      return false;
    }
    for (let i = 0; i < length; i++) {
      if (!isEqual(value[i], other[i])) {
        return false;
      }
    }
    return true;
  }
  for (const key in value) {
    if (!isEqual(value[key], other[key])) {
      return false;
    }
  }
  return true;
};
export default isEqual;
