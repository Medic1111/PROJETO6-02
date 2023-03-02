const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength: [5, "Minimun 5 character"],
    maxLength: [15, "Max character allowed is 15"],
    required: [true, "This field is required"],
    unique: [true, "username already registered"],
    trim: true,
  },
  password: {
    type: String,
    minLength: [8, "Minimun 8 character"],
    maxLength: [15, "Max character allowed is 15"],
    required: [true, "This field is required"],
    trim: true,
  },
  email: {
    type: String,
    minLength: [8, "Minimun 8 character"],
    maxLength: [99, "Max character allowed is 99"],
    required: [true, "This field is required"],
    trim: true,
    unique: [true, "email already registered"],
  },
  phone_number: {
    type: Number,
    minLength: [9, "Minimun 9 character"],
    maxLength: [12, "Max character allowed is 12"],
    required: [true, "This field is required"],
    unique: [true, "Phone number already registered"],

    trim: true,
  },
  carrinho: {
    type: Array,
    default: [],
  },
  time_password: {
    type: Date,
    default: new Date(),
  },
  data_register: {
    type: Date,
    default: new Date(),
  },
  temporary_code_password: {
    type: String,
    default: new Date(),
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
