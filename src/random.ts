function random(start: number, end: number): number;
function random(end: number): number;

/**
 * create random number between min and max
 * @param arg1 min number
 * @param arg2 max number
 * @returns {number}
 */
function random(arg1: number, arg2?: number): number {
  const start = typeof arg2 === "undefined" ? 0 : arg1;
  const end = typeof arg2 === "undefined" ? arg1 : arg2;

  return Math.floor(Math.random() * (end - start + 1)) + start;
}

export default random;
