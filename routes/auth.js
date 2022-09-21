const { signup, signIn, googleAuth } = require("../controllers/auth");
const router = require("express").Router();


router.route("/signup").post(signup);
router.route("/signin").post(signIn);

router.route("/google").post(googleAuth);


module.exports= router
