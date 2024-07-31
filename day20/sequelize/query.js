const { User } = require("./models");
User.create({
  name: "winter",
  age: 24,
  married: false,
  comment: "hi~ i'm winter",
});

User.findAll({});

User.findAll({
  attributes: ["name", "married"],
});
