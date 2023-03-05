const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const { Product } = require("./models/products");
const { User } = require("./models/user");
const bcrypt = require("bcrypt");
require("dotenv").config();

const app = express();

// MIDDLEWARE

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.get("/api/v1", (req, res) => {
  res.status(500).json({ message: "SENHA INCORRETA" });
});

app.get("/api/v1/products", async (req, res) => {
  if (req.query && req.query.label) {
    const allProducts = await Product.find(req.query);
    return res.status(200).json({ products: allProducts });
  }
  const allProducts = await Product.find();
  res.status(200).json({ products: allProducts });
});

app.post("/api/v1/auth/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username }).select("+password");

  if (!user) {
    return res.status(404).json({ message: "Usuario não existe" });
  }

  const decrypt = await bcrypt.compare(password, user.password)

  if (!decrypt) {
    return res.status(401).json({ message: "senha incorreta" });
  }
  user.password = "e agora?"

  res.status(200).json({ user });
});

app.post("/api/v1/auth/register", async (req, res) => {
  const {password} = req.body;
  const hash = await bcrypt.hash(password, 12)
  const user = await User.create({...req.body, password: hash});
  res.status(201).json(user);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});

module.exports = app;
