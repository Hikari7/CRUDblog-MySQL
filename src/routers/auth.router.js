const router = require("express").Router();

const {
  getCreateUser,
  postCreateUser,
} = require("../controller/auth.countroller");

// router.get("/", (req, res) => {
//   res.render("index.ejs");
// });
router.get("/register", getCreateUser);
router.post("/register", postCreateUser);

module.exports = router;
