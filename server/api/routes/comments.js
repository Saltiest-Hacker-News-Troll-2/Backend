const router = require("express").Router();
const db = require("../../../database/model");
// GET USER INFO FROM TOKEN SENT ON HEADER OF AUTH
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.getCommentById(id).then(comment =>
    !comment ? res.status(404) : res.status(200).json(comment)
  );
});

router.get("/user/:user", (req, res) => {
  const username = req.params.user;
  db.findUserByUsername(username).then(user => {
    if (!user) {
      res.status(404).end();
    } else {
      db.getCommentsByUsername(username).then(comments =>
        !comments
          ? res.status(400).json({ message: "No comments from this user" })
          : res.status(200).json(comments)
      );
    }
  });
});

router.get("/post/:post", (req, res) => {
  const id = req.params.post;
  db.getCommentsByParent(id).then(
    !comments
      ? res.status(404).json({ message: "No Comments" })
      : res.status(200).json(comments)
  );
});

router.use("/", (req, res) => {
  res.status(200).json({ commentRoute: "up" });
});

module.exports = router;
