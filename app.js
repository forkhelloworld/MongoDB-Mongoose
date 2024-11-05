const express = require("express");
const apiRouter = require("./routes/apiRoute");
const bodyparser = express.json();
const errorHandler = require("./errorHandler");
const app = express();

app.use(bodyparser);
app.use("/api", apiRouter);
app.use(errorHandler);

module.exports = app;
