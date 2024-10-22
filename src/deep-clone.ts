const deepClone = (source: any) => {
  if (typeof source !== "object" || source === null) {
    return source;
  }

  const find = (source: any, hash = new WeakMap()) => {
    const target: any = Array.isArray(source) ? [] : {};

    if (hash.has(source)) {
      return hash.get(source);
    }

    hash.set(source, target);
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = deepClone(source[key]);
      }
    }
  };

  return find(source);
};
export default deepClone;
