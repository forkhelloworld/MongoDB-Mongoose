const Dish = require("../models/Dish");
const NotFoundError = require("../errors/NotFoundError");

module.exports.createOne = async (req, res, next) => {
  try {
    const { body, ingredients } = req;

    const dish = new Dish(body);
    dish.ingredients = ingredients;
    await dish.save();
    res.status(201).json({ dish });
  } catch (err) {
    next(err);
  }
};

module.exports.getOne = async (req, res, next) => {
  try {
    const {
      params: { dishId },
    } = req;
    const dish = await Dish.findById(dishId).populate("ingredients");
    if (!dish) {
      throw new NotFoundError("Dish");
    }
    res.status(200).send({ dish });
  } catch (error) {
    next(error);
  }
};

module.exports.getAll = async (req, res, next) => {
  try {
    const dish = await Dish.find();
    res.status(200).send({ dish });
  } catch (error) {
    next(error);
  }
};
module.exports.updateOne = async (req, res, next) => {
  try {
    const {
      body: { name, description, instructions, imageUrl },
      ingredients,
    } = req;
    const dish = await Dish.findById(req.params.id);

    if (!dish) {
      throw new NotFoundError("Dish");
    }

    if (name) dish.name = name;
    if (description) dish.description = description;
    if (ingredients) dish.ingredients = ingredients;
    if (instructions) dish.instructions = instructions;
    if (imageUrl) dish.imageUrl = imageUrl;

    await dish.save();
    res.status(200).json({ dish });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteOne = async (req, res, next) => {
  try {
    const {
      params: { dishId },
    } = req;
    const dish = await Dish.findByIdAndDelete(+dishId);
    if (!dish) {
      throw new NotFoundError("Dish");
    }
    res.status(200).send({ dish });
  } catch (error) {
    next(error);
  }
};

module.exports.getDishesByIngredients = async (req, res, next) => {
  try {
    const { ingredients } = req;

    if (!ingredients) {
      throw new NotFoundError("Ingredients");
    }

    const dishes = await Dish.find({
      ingredients: { $all: ingredients },
    }).populate("ingredients");

    res.status(200).send({ dishes });
  } catch (error) {
    next(error);
  }
};
