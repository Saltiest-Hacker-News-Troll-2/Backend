const router = require("express").Router();

//* Routes
const authRouter = require("./routes/auth");
const commentsRouter = require("./routes/comments");
const userRouter = require("./routes/user");

const restricted = require("./middleware/restricted");

router.use("/auth", authRouter);
router.use("/user", restricted, userRouter);
router.use("/comments", restricted, commentsRouter);

router.use("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = router;
