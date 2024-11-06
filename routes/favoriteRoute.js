const favoriteRouter = require("express").Router();
const favoriteController = require("../controllers/favoriteController");

favoriteRouter.get("/:userId", favoriteController.getDish);
favoriteRouter.post("/:userId/:dishId", favoriteController.addDish);
favoriteRouter.delete("/:userId/:dishId", favoriteController.deleteDish);

module.exports = favoriteRouter;
