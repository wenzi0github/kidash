import combineURL from "./combine-url";
import isAbsoluteUrl from "./is-absolute-url";

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
const buildFullPath = (baseURL: string, requestedURL: string): string => {
  if (baseURL && !isAbsoluteUrl(requestedURL)) {
    return combineURL(baseURL, requestedURL);
  }
  return requestedURL;
};
export default buildFullPath;
