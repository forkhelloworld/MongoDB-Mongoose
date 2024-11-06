const apiRouter = require("express").Router();
const userRouter = require("./userRoute");
const dishRouter = require("./dishRoute");
const favoriteRouter = require("./favoriteRoute");

apiRouter.use("/user/favorite", favoriteRouter);
apiRouter.use("/user", userRouter);
apiRouter.use("/dish", dishRouter);

module.exports = apiRouter;
