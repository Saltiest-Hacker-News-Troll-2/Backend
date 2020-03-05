const db = require("../../../database/model");
module.exports = {
  validateUsername
};

function validateUsername(req, res, next) {
  const { username } = req.decodedToken;
  db.findUserByUsername(username).then(user => {
    user ? next() : res.status(500).json({ errorMessage: "user not found" });
  });
}
