const fs = require("fs");

console.log("start");

let data = fs.readFileSync("./readme2.txt");
console.log("no1", data.toString());
data = fs.readFileSync("./readme2.txt");
console.log("no2", data.toString());
data = fs.readFileSync("./readme2.txt");
console.log("no3", data.toString());

console.log("fin");
