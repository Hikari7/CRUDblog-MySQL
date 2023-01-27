const router = require("express").Router();
const { checkSession } = require("../util/checkSession");

//auth用にcontroller作らなきゃいけない
const {
  getLoginPage,
  getRegister,
  postRegister,
  postLoginPage,
  getLogoutPage,
} = require("../controller/auth.countroller");

router.get("/", getLoginPage);
router.get("/register", getRegister);
router.post("/register", postRegister);
router.post("/", postLoginPage);
router.get("/", getLogoutPage);

module.exports = router;
