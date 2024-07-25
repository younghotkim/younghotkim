const fs = require("fs");

console.log("start");

fs.readFile("./readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("no1", data.toString());
});

fs.readFile("./readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("no2", data.toString());
});

fs.readFile("./readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("no3", data.toString());
});

console.log("fin");
