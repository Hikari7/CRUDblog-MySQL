const router = require("express").Router();
const { checkSession } = require("../util/checkSession");

//auth用にcontroller作らなきゃいけない
const {
  getLoginPage,
  getRegister,
  //   postLogin,
  postRegister,
} = require("../controller/auth.countroller");

router.get("/", getLoginPage);
router.get("/register", getRegister);
// router.get("/", postLogin);
router.post("/register", postRegister);

module.exports = router;


