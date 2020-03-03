const db = require("../../../database/model");

module.exports = {
  validateUserBody,
  validateUsername
};

function validateUserBody(req, res, next) {
  const { username, password } = req.body;
  if (!username || !password) {
    res
      .status(400)
      .json({ errorMessage: "Please provide username and password" });
  } else {
    next();
  }
}

function validateUsername(req, res, next) {
  const { username } = req.body;
  db.findUserByUsername(username).then(user => {
    !user
      ? next()
      : res.status(500).json({ errorMessage: "username already in use" });
  });
}
