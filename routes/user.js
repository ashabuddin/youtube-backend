const {
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} = require("../controllers/user");
const { verifyToken } = require("../middleware/verifyToken");
const router = require("express").Router();

//update user
router.route("/:id").put( verifyToken, update);

//delete user
router.route("/:id").delete(verifyToken, deleteUser);

//get a user
router.route("/find/:id").get(getUser);

//subscribe a user
router.route("/sub/:id").put(verifyToken, subscribe);

//unsubscribe a user
router.route("/unsub/:id").put(verifyToken, unsubscribe);

//like a video
router.route("/like/:videoId").put(verifyToken, like);

//dislike a video
router.route("/dislike/:videoId").put(verifyToken, dislike);

module.exports = router;
