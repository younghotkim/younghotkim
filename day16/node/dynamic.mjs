const a = true;

const m3 = await import("./func.mjs");
console.log(m3);
const m4 = await import("./var.mjs");
console.log(m4);

if (a) {
  const m1 = await import("./func.mjs");
  console.log(m1);
  const m2 = await import("./var.mjs");
  console.log(m2);
}
