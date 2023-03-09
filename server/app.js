const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const { Product } = require("./models/products");
const { User } = require("./models/user");
const bcrypt = require("bcrypt");
const rateLimit = require('express-rate-limit')
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const helmet = require("helmet");
require("dotenv").config();

const app = express();

const limiter =  rateLimit({
  max: 100,
  window: 60 * 60 * 1000,
  message: "Too many requests from this IP, try again in an hour",
});

// MIDDLEWARE

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.static(path.resolve(__dirname, "../client/dist")));
app.use(mongoSanitize())
app.use(xss());
app.use(hpp());
app.use(helmet());
app.use("/api/v1", limiter);

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

app.delete("/api/v1/auth/delete", async (req, res) => {
  const { password, password_confirm, username } = req.body

  if (password !== password_confirm) {
    return res.status(401).json({ message: "senhas não são iguais" })
  }

  const user = await User.findOne({ username: username }).select("+password")

  const decrypt = await bcrypt.compare(password, user.password)

  if (!decrypt) {
    return res.status(401).json({ message: "senha incorreta" })
  }

  await User.findOneAndDelete({username: username})
  res.status(202).json({message: "conta deletada, eh us guri"})
})

app.post("/api/v1/auth/register", async (req, res) => {
  const { password } = req.body;
  const hash = await bcrypt.hash(password, 12)
  const user = await User.create({ ...req.body, password: hash });
  res.status(201).json(user);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});

module.exports = app;
