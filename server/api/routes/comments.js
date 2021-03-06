const router = require("express").Router();
const db = require("../../../database/model");
const { validateComment, verifyComment } = require("../middleware/comment");

// GET USER INFO FROM TOKEN SENT ON HEADER OF AUTH

router.get("/", (req, res) => {
  let { limit, offset } = req.query;
  offset = offset * limit;
  db.getComments(limit, offset).then(comments =>
    !comments ? res.status(404) : res.status(200).json(comments)
  );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.getCommentById(id).then(comment =>
    !comment ? res.status(404) : res.status(200).json(comment)
  );
});

router.get("/user/:user", (req, res) => {
  let { limit, offset } = req.query;
  offset = offset * limit;
  const username = req.params.user;
  // db.findUserByUsername(username).then(user => {
  // if (!user) {
  // res.status(404).end();
  // } else {
  db.getCommentsByUsername(username, limit, offset).then(comments =>
    !comments.length
      ? res.status(400).json({ message: "No comments from this user" })
      : res.status(200).json(comments)
  );
  // }
  // });
});

router.get("/post/:post", (req, res) => {
  const id = req.params.post;
  db.getCommentsByParent(id).then(
    !comments.length
      ? res.status(404).json({ message: "No Comments" })
      : res.status(200).json(comments)
  );
});

router.post("/", validateComment, (req, res) => {
  const comment = req.body;
  db.createComment(comment)
    .then(comment => res.status(201).json({ comment }))
    .catch(err =>
      res.status(500).json({ errorMessage: "unable to create comment", err })
    );
});

router.delete("/:id", verifyComment, (req, res) => {
  const { id } = req.params;
  db.removeComment(id).then(count => {
    !count
      ? res.status(404)
      : res.status(200).json({ message: "Successfully deleted comment" });
  });
});

router.use("/", (req, res) => {
  res.status(200).json({ commentRoute: "up" });
});

module.exports = router;
