function random(start: number, end: number): number;
function random(end: number): number;

function random(arg1: number, arg2?: number): number | string {
  if (typeof arg1 === "string") {
    return 123;
  }
  const start = typeof arg2 === "undefined" ? 0 : arg1;
  const end = typeof arg2 === "undefined" ? arg1 : arg2;

  return Math.floor(Math.random() * (end - start + 1)) + start;
}

export default random;
