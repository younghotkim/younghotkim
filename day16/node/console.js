const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};

console.time("global time");

console.table([
  { name: "zero", birth: 1994 },
  { name: "here", birth: 1998 },
]);
console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time("time measure");
for (let i = 0; i < 10000; i++) {}
console.timeEnd("time measure");

function b() {
  console.trace("detecting error");
}

function a() {
  b();
}
a();

console.timeEnd("global time");
