const url = require("url");
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`START SERVER: use ${port}`);
  console.log("Router Refactoring by Express");
});

//router
app.get("/", (_, res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

//callback function

function user(req, res) {
  const user = url.parse(req.url, true).query;
  res.json(`[user] name: ${user.name}, age: ${user.age}`);
}

function feed(_, res) {
  res.json(`<ul>
      <li>picture1</li>
      <li>picture2</li>
      <li>picture3</li>    
    </ul>`);
}
