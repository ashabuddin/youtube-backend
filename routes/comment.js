const router = require("express").Router();
const {
  addComment,
  deleteComment,
  getComment,
} = require("../controllers/comment");
const { verifyToken } = require("../middleware/verifyToken");

router.route("/").post(verifyToken, addComment);
router.route("/:id").delete(verifyToken, deleteComment);
router.route("/:videoId").get(getComment);

module.exports = router;
