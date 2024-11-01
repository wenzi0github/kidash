/**
 * 深度拷贝
 * @param source
 */
const deepClone = (source: any) => {
  if (typeof source !== "object" || source == null) {
    // 普通类型的数据，直接返回即可
    return source;
  }

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/API/Window/structuredClone
   */
  if (typeof structuredClone === "function") {
    return structuredClone(source);
  }

  const clone = (source: any, hash = new WeakMap()) => {
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

  return clone(source);
};
export default deepClone;
