const app = require("./app");

const server = app.listen(process.env.PORT || 3002, (err) => {
  err ? console.log(err) : console.log("SERVER SPINNING");
});
