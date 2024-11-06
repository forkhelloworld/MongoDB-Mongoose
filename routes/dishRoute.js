const dishRouter = require("express").Router();
const dishController = require("../controllers/dishController");
const getIngredients = require("../middlewares/getIngredients");

dishRouter.post("/", getIngredients, dishController.createOne);
dishRouter.get("/", dishController.getAll);
dishRouter.get(
  "/filter",
  getIngredients,
  dishController.getDishesByIngredients,
);
dishRouter.get("/:dishId", dishController.getOne);
dishRouter.put("/:dishId", getIngredients, dishController.updateOne);
dishRouter.delete("/:dishId", dishController.deleteOne);

module.exports = dishRouter;
