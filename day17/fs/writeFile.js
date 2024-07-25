const fs = require("fs").promises;

fs.writeFile("./writeme.txt", "writing")
  .then(() => {
    return fs.readFile("./writeme.txt");
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.log(err);
  });
