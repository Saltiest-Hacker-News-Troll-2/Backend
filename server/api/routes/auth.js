const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../secrets");
const { JWT_SECRET = jwtSecret } = process.env;
const db = require("../../../database/model");
const { validateUserBody, validateUsername } = require("../middleware/auth");

router.post("/register", validateUserBody, validateUsername, (req, res) => {
  console.log("REGISTER");
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 8); //todo change salt
  user.password = hash;
  db.addUser(user)
    .then(user => {
      const token = tokenGenerator(user);
      res.status(201).json({ user, token });
    })
    .catch(err =>
      res.status(500).json({ errorMessage: "unable to create user", err })
    );
});

router.post("/login", validateUserBody, (req, res) => {
  const { username, password } = req.body;
  db.findUserByUsername(username).then(user => {
    if (!user) {
      res.status(400).json({ errorMessage: "incorrect credentials" });
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        const token = tokenGenerator(user);
        res.status(200).json({ user, token });
      } else {
        res.status(400).json({ errorMessage: "Incorrect Credentials" });
      }
    }
  });
});

router.use("/", (req, res) => {
  res.status(200).json({ authRoute: "up" });
});

module.exports = router;

function tokenGenerator({ username, password }) {
  const payload = {
    username,
    password
  };
  const secret = JWT_SECRET;
  const options = {
    expiresIn: "1w"
  };
  return jwt.sign(payload, secret, options);
}
