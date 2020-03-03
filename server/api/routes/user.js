const router = require("express").Router();
const db = require("../../../database/model");
const { validateUsername } = require("../middleware/user");

router.put("/:user", validateUsername, (req, res) => {
  const { id } = req.decodedToken;
  const newUser = req.body;
  db.updateUser(id, newUser)
    .then(count => res.status(200).json(count))
    .catch(err =>
      res.status(500).json({ errorMessage: "unable to update user", err })
    );
});

router.use("/", (req, res) => {
  res.status(200).json({ userRoute: "up" });
});

module.exports = router;
