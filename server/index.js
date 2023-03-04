const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("DB CONNECTED"))
  .catch((error) => console.log(error));

const app = require("./app");

const server = app.listen(process.env.PORT || 3002, (err) => {
  err ? console.log(err) : console.log("SERVER SPINNING");
});
