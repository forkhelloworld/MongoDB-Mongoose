const Dish = require("../models/Dish");
const User = require("../models/User");
const NotFoundeError = require("../errors/NotFoundError");
const NotFoundError = require("../errors/NotFoundError");

module.exports.addDish = async (req, res, next) => {
  try {
    const {
      params: { userId, dishId },
    } = req;
    const dish = await Dish.findById(dishId);
    if (!dish) {
      throw new NotFoundError("Dish");
    }

    const user = await User.findById(userId);
    if (!user) {
      throw new NotFoundError("User");
    }
    user.favorites = [...user.favorites, dish.id];
    user.save();
    res.status(200).send({ user });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteDish = async (req, res, next) => {
  try {
    const {
      params: { userId, dishId },
    } = req;

    const user = await User.findById(userId);
    if (!user) {
      throw new NotFoundError("User");
    }
    const index = user.favorites.indexOf(dishId);
    if (index === -1) {
      throw new NotFoundError("Dish");
    }
    user.favorites.splice(index);
    res.status(200).send({ favorites: user.favorites });
  } catch (error) {
    next(error);
  }
};

module.exports.getDish = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;

    const user = await User.findById(userId);
    if (!user) {
      throw new NotFoundError("User");
    }

    res.status(200).send({ favorites: user.favorites });
  } catch (error) {
    next(error);
  }
};
