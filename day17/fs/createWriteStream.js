const fs = require("fs");

const writeStream = fs.createWriteStream("./writeme2-1.txt");

writeStream.on("finish", () => {
  console.log("File writing finished.");
});

for (let i = 0; i < 5; i++) {
  let line = "";
  for (let j = 0; j < 5; j++) {
    if (j < 5 - (i + 1)) {
      line += "0";
    } else {
      line += "1";
    }
  }
  writeStream.write(line + "\n"); // 파일에 라인 쓰기
}

writeStream.end();
