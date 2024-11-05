const apiRouter = require("express").Router();
const userRouter = require("./userRoute");
const dishRouter = require("./dishRoute");

apiRouter.use("/user", userRouter);
apiRouter.use("/dish", dishRouter);

module.exports = apiRouter;
