let prev = 0;
let id = 0;

const uuid = () => {
  const now = Date.now();

  if (now === prev) {
    id++;
  } else {
    id = 0;
    prev = now;
  }
  const random = `${Math.random().toString(36)}${id}`.slice(-4);

  return `${now.toString(36)}${random}`;
}

export default uuid;
