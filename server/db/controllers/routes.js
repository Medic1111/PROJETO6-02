const bcrypt = require("bcrypt");
const path = require("path");
const { User } = require("../../models/user");
const { Product } = require("../../models/products");

const incorrectPassword = (req, res) => {
  res.status(500).json({ message: "SENHA INCORRETA" });
}

const productsAPi = async (req, res) => {
  if (req.query && req.query.label) {
    const allProducts = await Product.find(req.query);
    return res.status(200).json({ products: allProducts });
  }
  const allProducts = await Product.find();
  res.status(200).json({ products: allProducts });
}

const userLogin = async (req, res) => {
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
}

const userDelete = async (req, res) => {
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
  res.status(202).json({message: "conta deletada"})
}

const userRegister = async (req, res) => {
  const { password } = req.body;
  const hash = await bcrypt.hash(password, 12)
  const user = await User.create({ ...req.body, password: hash });
  res.status(201).json(user);
}

const resClient = (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "../../../client/dist", "index.html")
  );
}

const err = (req, res, next) => {
  next({
    statusCode: 500,
    message: "Oops, something went wrong",
  });
}

module.exports = {
  incorrectPassword, 
  productsAPi,
  userLogin,
  userDelete,
  userRegister,
  resClient,
  err
}