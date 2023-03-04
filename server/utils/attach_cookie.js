const attachCookie = (req, res, next) => {
  let token = signToken(req.body.username);
  res.cookie("jwt", token, {
    maxAge: 3600000,
    secure: true,
    httpOnly: true,
    sameSite: "None",
  });
  next();
};

module.exports = attachCookie;
