const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength: [5, "Minimun 5 character"],
    maxLength: [15, "Max character allowed is 15"],
    required: [true, "This field is required"],
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
  },
  phoneNumber: {
    type: Number,
    minLength: [9, "Minimun 9 character"],
    maxLength: [12, "Max character allowed is 12"],
    required: [true, "This field is required"],
    trim: true,
  },
  carrinho: {
    type: Array,
    default: []
  },
  timePassword: {
    type: Date,
    default: new Date(),
  },
  dataRegister: {
    type: Date,
    default: new Date(),
  },
  temporaryCodePassword: {
    type: String,
    default: new Date()
  }
})

const User = mongoose.model("Product", userSchema);

module.exports = { User };