export function uuid() {
  let uuid = "",
    i,
    random;
  for (i = 0; i < 32; i++) {
    random = (Math.random() * 16) | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += "-";
    }
    uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16);
  }
  return uuid;
}

export function hex(n = 16) {
  let uuid = "",
    i,
    random;
  for (i = 0; i < n; i++) {
    random = (Math.random() * 16) | 0;
    uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16);
  }
  return uuid;
}

export function checksum(string) {
  let hash = "";
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i).toString(16);
  }
  return hash;
}

export function createUid(alg, n = 16) {
  if (alg === "uuid") return uuid;
  if (alg === "hex") return () => hex(n);
}
