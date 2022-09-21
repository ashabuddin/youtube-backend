const router = require("express").Router();
const authRoutes = require("./auth");
const commentRoutes = require("./comment");
const userRoutes = require("./user");
const videoRoutes = require("./video");

router.use("/api/auth", authRoutes);
router.use("/api/comments", commentRoutes);
router.use("/api/users", userRoutes);
router.use("/api/videos", videoRoutes);

module.exports = router;
