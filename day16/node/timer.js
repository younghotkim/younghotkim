const timeout = setTimeout(() => {
  console.log("run after 1.5s");
}, 1500);

const interval = setInterval(() => {
  console.log("interval 1s");
}, 1000);

const timeout2 = setTimeout(() => {
  console.log("do not run");
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log("run immdediatly");
});

const immediate2 = setImmediate(() => {
  console.log("do not run");
});

clearImmediate(immediate2);
