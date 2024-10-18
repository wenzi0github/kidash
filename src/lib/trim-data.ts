import isPlainObject from "./is-plain-object";

const trimData = (data: any): any => {
  if (!data) {
    return data;
  }
  if (Array.isArray(data)) {
    // 仅针对数组
    return data.map((item) => trimData(item));
  }
  if (isPlainObject(data)) {
    // 仅针对普通对象
    const result: any = {};

    for (const key in data) {
      result[key] = trimData(data[key]);
    }
    return result;
  }
  if (typeof data === "string") {
    // 清除开头和结尾的空格
    return data.replace(/^\s+|\s+$/g, "");
  }
  return data;
};
export default trimData;
