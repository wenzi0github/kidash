/**
 * get random string
 * @param len
 * @param base
 */
const randomString = (len = 32, base?: string) => {
  const BASE_LEN = 32;
  const characters = base || "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charactersLength = characters.length;

  let count = typeof len !== "number" || len <= 0 ? BASE_LEN : len;
  let result = "";

  if (count <= BASE_LEN && !base && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID().replace(/-/g, "").substring(0, count);
  }
  if (typeof Uint32Array === "function" && typeof crypto.getRandomValues === "function") {
    const randomValues = new Uint32Array(count);

    window.crypto.getRandomValues(randomValues);
    randomValues.forEach((value) => {
      result += characters.charAt(value % charactersLength);
    });
    return result;
  }

  let a = count;
  while (a--) {
    result += characters[Math.floor(Math.random() * charactersLength)];
  }

  return result;
};
export default randomString;
