const db = require("../../../database/model");
module.exports = {
  validateComment,
  verifyComment
};

function validateComment(req, res, next) {
  const { text } = req.body;

  if (!text) {
    res.status(400).json({ errorMessage: "Please provide all details" });
  } else {
    next();
  }
}

function verifyComment(req, res, next) {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ errorMessage: "Please provide comment id" });
  } else {
    db.getCommentById(id).then(comment => {
      if (comment.length > 0) {
        next();
      } else {
        res.status(404).end();
      }
    });
  }
}
