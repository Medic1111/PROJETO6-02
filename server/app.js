const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
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

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});

module.exports = app;
