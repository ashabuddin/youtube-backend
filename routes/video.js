const {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  addView,
  trend,
  random,
  sub,
  getByTag,
  search,
} = require("../controllers/video");
const { verifyToken } = require("../middleware/verifyToken");

const router = require("express").Router();

router.route("/").post(verifyToken, addVideo);
router.route("/:id").put(verifyToken, updateVideo);

router.route("/:id").delete(verifyToken, deleteVideo);
router.route("/find/:id").get(getVideo);

router.route("/view/:id").put( addView);
router.route("/trend").get( trend);

router.route("/random").get( random);
router.route("/trend").get( trend);

router.route("/sub").get( verifyToken, sub);
router.route("/tags").get(getByTag);
router.route("/search").get(search);

module.exports = router;
