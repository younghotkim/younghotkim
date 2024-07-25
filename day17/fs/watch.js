const fs = require("fs");

fs.watch("./target.txt", (evenType, filename) => {
  console.log(eventType, filename);
});
