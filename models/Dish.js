const mongoose = require("mongoose");

const dishSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  ingredients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient",
    },
  ],
  instructions: String,
  imageUrl: String,
});

const Dish = mongoose.model("Dish", dishSchema);
module.exports = Dish;
