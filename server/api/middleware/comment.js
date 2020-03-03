module.exports = {
  verifyComment
};

function verifyComment(req, res, next) {
  const { text } = req.body;

  if (!text) {
    res.status(400).json({ errorMessage: "Please provide all details" });
  } else {
    next();
  }
}
