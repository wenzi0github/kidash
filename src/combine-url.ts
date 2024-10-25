/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
const combineURL = (baseURL: string, relativeURL?: string): string => {
  // 将 baseURL 最后的斜杠和 relativeURL 最前面的斜杠去掉
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};
export default combineURL;
