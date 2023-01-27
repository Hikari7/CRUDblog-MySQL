const router = require("express").Router();

const {
  getCreateUser,
  postCreateUser,
} = require("../controller/auth.countroller");

router.get("/register", getCreateUser);
router.post("/register", postCreateUser);

module.exports = router;
