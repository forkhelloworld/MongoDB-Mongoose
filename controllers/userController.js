const { User } = require("../models");
const NotFoundError = require("../errors/NotFoundError");

module.exports.createOne = async (req, res, next) => {
  try {
    const { body } = req;

    const user = new User(body);
    await user.save();
    res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
};

module.exports.getOne = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;

    const user = await User.findById(userId);
    if (!user) {
      throw new NotFoundError("User");
    }
    res.status(200).send({ user });
  } catch (error) {
    next(error);
  }
};

module.exports.getAll = async (req, res, next) => {
  try {
    const user = await User.find({});
    res.status(200).send({ user });
  } catch (error) {
    next(error);
  }
};
module.exports.updateOne = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findById(req.params.id);

    if (!user) {
      throw new NotFoundError("User");
    }

    if (username) user.username = username;
    if (email) user.email = email;
    if (password) user.password = password;

    await user.save();
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteOne = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      throw new NotFoundError("User");
    }
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};
