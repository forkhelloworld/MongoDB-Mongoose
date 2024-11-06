const Ingredient = require("../models/Ingredient");

module.exports = async (req, res, next) => {
  try {
    const {
      body: { ingredients },
    } = req;

    if (ingredients) {
      const ingredientsArr = [];
      for (const name of ingredients) {
        let ingredient = await Ingredient.findOne({ name });

        if (!ingredient) {
          ingredient = new Ingredient({ name });
          await ingredient.save();
        }

        ingredientsArr.push(ingredient.id);
      }

      req.ingredients = ingredientsArr;
      next();
    }
  } catch (error) {
    next(error);
  }
};
