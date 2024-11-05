const userRouter = require("express").Router();
const userController = require("../controllers/userController");

userRouter.post("/", userController.createOne);
userRouter.get("/", userController.getAll);
userRouter.get("/:userId", userController.getOne);
userRouter.put("/:userId", userController.updateOne);
userRouter.delete("/:userId", userController.deleteOne);

module.exports = userRouter;
