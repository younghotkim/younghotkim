const fs = require("fs");

const file = fs.createWriteStream("./big.txt");

for (let i = 0; i <= 1000000; i++) {
  file.write("Hi we r gon make a really big file. \n");
}
file.end();
