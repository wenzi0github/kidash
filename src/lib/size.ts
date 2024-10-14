import isNil from "./is-nil";

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
  if (typeof value === "number") {
    return 0;
  }
  try {
    return Object.keys(value as any).length;
  } catch (err) {
    console.error("size value is only `string | object | null | undefined`");
  }
  return 0;
};
export default size;
