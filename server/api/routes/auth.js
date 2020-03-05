const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../secrets");
const { JWT_SECRET } = process.env;
const db = require("../../../database/model");
const { validateUserBody, validateNewUsername } = require("../middleware/auth");

router.post("/register", validateUserBody, validateNewUsername, (req, res) => {
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
      res.status(403).json({ errorMessage: "incorrect credentials" });
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        const token = tokenGenerator(user);
        res.status(200).json({ user, token });
      } else {
        res.status(403).json({ errorMessage: "Incorrect Credentials" });
      }
    }
  });
});

//todo remove this endpoint
router.get("/users", (req, res) => {
  db.userList()
    .then(users => res.status(200).json(users))
    .catch(err =>
      res.status(500).json({ errorMessage: "Unable to retrieve user list" })
    );
});

router.use("/", (req, res) => {
  res.status(200).json({ authRoute: "up" });
});

module.exports = router;

function tokenGenerator(user) {
  const payload = {
    ...user
  };
  const secret = JWT_SECRET || jwtSecret;
  const options = {
    expiresIn: "1w"
  };
  return jwt.sign(payload, secret, options);
}
