const express = require("express");
const path = require("path");
const morgan = require("morgan");
const nunjucks = require("nunjucks");

const { User, Comment } = require("./models");
const { Op } = require("sequelize");
const { sequelize } = require("./models");
const exp = require("constants");

const app = express();
app.set("port", process.env.PORT || 3001);
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("database connection succeed!");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} no router!`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = preocess.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(app.get("port"), async () => {
  console.log(app.get("port"), " waiting port");
  // User.create({
  //   name: "winter",
  //   age: 24,
  //   married: false,
  //   comment: "hi~ i'm winter",
  // });
  // let data = await User.findAll({
  //   attributes: ["name", "married"],
  //   where: {
  //     [Op.or]: [{ married: 0 }, { age: { [Op.gt]: 20 } }],
  //   },
  // });
  // console.log(data);

  // data = await User.findAll({
  //   attributes: ["id", "name"],
  //   order: [["age", "desc"]],
  // });
  // console.log("order =>", data);

  // data = await User.findAll({
  //   attributes: ["id", "name"],
  //   order: [["age", "desc"]],
  //   limit: 1,
  // });
  // console.log("limit =>", data);

  // data = await User.findAll({
  //   attributes: ["id", "name"],
  //   order: [["age", "desc"]],
  //   limit: 1,
  //   offset: 1,
  // });
  // console.log("offset =>", data);

  // User.destroy({
  //   where: { id: 2 },
  // });

  let data = await User.findAll({
    include: [
      {
        model: Comment,
      },
    ],
  });
  console.log(data.comments);
});
