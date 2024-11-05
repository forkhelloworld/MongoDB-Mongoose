const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const PORT = 5000;

const mongoose = require("mongoose");
const CONFIG = require("./configs/mongoConf.json")["development"];
const url = `mongodb://${CONFIG.host}:${CONFIG.port}/${CONFIG.database}`;

mongoose
  .connect(url)
  .then(() => {
    console.log("connect to database succsessfuly");
  })
  .catch((err) => {
    console.log("connection to database field");
    process.exit(1);
  });

server.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);
});
