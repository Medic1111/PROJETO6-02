const mongoose = require("mongoose");
require("dotenv").config();
const { Product } = require("../models/products");
const { User } = require("../models/user");
const { mockProducts } = require("./mock-products");
const { mockUsers } = require("./mock-users");

const connection = async () => {
  await mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("DB CONNECTED");
    })
    .catch((err) => {
      console.log(err);
    });
};

const seedDB = async (Model, mockData) => {
  await connection();

  await Model.create(mockData)
    .then(() => {
      console.log("DB POPULADA");
    })
    .catch((err) => {
      console.log(err);
    });
  process.exit();
};

const clearDB = async (Model) => {
  await connection();

  await Model.deleteMany()
    .then(() => {
      console.log("DB LIMPA");
    })
    .catch((err) => {
      console.log(err);
    });
  process.exit();
};

if (process.argv[2] === "--seedDB-product") {
  seedDB(Product, mockProducts);
} else if (process.argv[2] === "--clearDB-product") {
  clearDB(Product);
} else if (process.argv[2] === "--seedDB-user") {
  seedDB(User, mockUsers);
} else if (process.argv[2] === "--clearDB-user") {
  clearDB(User);
}
