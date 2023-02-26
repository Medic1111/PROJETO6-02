const mongoose = require("mongoose");
require("dotenv").config();
const { Product } = require("../models/products");
const { mockProducts } = require("./mock-products");

const connection = async () => {
  await mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("db pronta para popular!");
    })
    .catch((err) => {
      console.log(err);
    });
};

const seedDB = async (Product, mockData) => {
  await connection();

  await Product.create(mockData)
    .then(() => {
      console.log("DB POPULADA");
    })
    .catch((err) => {
      console.log(err);
    });
  process.exit();
};

const clearDB = async (Product) => {
  await connection();

  await Product.deleteMany()
    .then(() => {
      console.log("DB CLEARED");
    })
    .catch((err) => {
      console.log(err);
    });
  process.exit();
};

if (process.argv[2] === "--seedDB") {
  seedDB(Product, mockProducts);
} else if (process.argv[2] === "--clearDB") {
  clearDB(Product);
}
