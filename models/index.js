const mongoose = require("mongoose");
const CONFIG = require("../configs/mongoConf.json")["development"];
const url = `mongodb://${CONFIG.host}:${CONFIG.port}/${CONFIG.database}`;
const Dish = require("./Dish");
const User = require("./User");
const Ingredient = require("./Ingredient");

mongoose
  .connect(url)
  .then(() => {
    console.log("connect to database succsessfuly");
  })
  .catch((err) => {
    console.log("connection to database field");
    process.exit(1);
  });

module.exports = {
  Dish,
  User,
  Ingredient,
};
