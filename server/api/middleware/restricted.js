const jwt = require("jsonwebtoken");
const jwtSecret = require("../secrets");
const { JWT_SECRET = jwtSecret } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    jwt.verify(authorization, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ errorMessage: "Token compromised" });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(500).json({
      errorMessage: "No credentials provided"
    });
  }
};
