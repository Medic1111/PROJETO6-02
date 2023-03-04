const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: [1, "Minimun 1 character"],
    maxLength: [99, "Max character allowed is 99"],
    required: [true, "This field is required"],
    trim: true,
  },
  price: {
    type: Number,
    min: [2, "Minimun 2 character"],
    max: [99999999, "Max  character"],
    required: [true, "This field is required"],
  },
  description: {
    type: String,
    minLength: [20, "Minimun 20 character"],
    maxLength: [250, "max 250 character"],
    required: [true, "This field is required"],
  },
  url: {
    type: String,
    minLength: [2, "Minimun 2 character"],
    maxLength: [99999999, "Max  character"],
    required: [true, "This field is required"],
  },
  stock_count: {
    type: Number,
    min: [0, "Minimun 2 character"],
    max: [99999999, "Max  character"],
    required: [true, "This field is required"],
  },
  label: {
    type: Array,
    default: [],
  },
  nutritional_facts: {
    type: Object,
    default: {},
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
