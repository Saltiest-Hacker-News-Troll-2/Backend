const db = require("../../../database/model");
const axios = require("axios");

const validateComment = async (req, res, next) => {
  req.body.By = req.decodedToken.username;
  const { By, Text } = req.body;
  if ((!By, !Text)) {
    res.status(400).json({ errorMessage: "Please provide username and text" });
  } else {
    const score = await axios
      .get(`https://hn-ds-api.herokuapp.com/sentence/${Text}`)
      .then(res => res.data.Analysis * -100);
    req.body.Score = score;
    next();
  }
};

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

module.exports = {
  validateComment,
  verifyComment
};
