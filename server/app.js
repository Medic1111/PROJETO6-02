const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const helmet = require("helmet");
const router = require("./routes/routes");
require("dotenv").config();

const app = express();

const limiter = rateLimit({
  max: 100,
  window: 60 * 60 * 1000,
  message: "Too many requests from this IP, try again in an hour",
});

// MIDDLEWARE

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.static(path.resolve(__dirname, "../client/dist")));
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.originAgentCluster());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
app.use("/api/v1", limiter);

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "img-src": ["'self'", "https: data:"],
    },
  })
);

app.get("/api/v1", router);
app.get("/api/v1/products", router);
app.post("/api/v1/auth/login", router);
app.delete("/api/v1/auth/delete", router);
app.post("/api/v1/auth/register", router);
app.get("*", router);

app.use((err, req, res, next) => {
  console.log("Middleware error handling: ", err);

  let statusCode = err.statusCode || 500;
  let status = String(statusCode).startsWith("4") ? "Fail" : "Error";
  let message = err.message || "Oops, something went wrong";

  res.status(statusCode).json({ status, message });
});

module.exports = app;
