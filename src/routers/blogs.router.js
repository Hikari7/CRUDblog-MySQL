// //create a new router object
const router = require("express").Router();
const { checkSession } = require("../util/checkSession");

const {
  getAllBlogs,
  getCreateBlog,
  postCreateBlog,
  getEditBlogById,
  postEditBlogById,
  deleteBlog,
} = require("../controller/blogs.controller");

router.get("/all", checkSession, getAllBlogs);
router.get("/create", checkSession, getCreateBlog);
router.post("/create", checkSession, postCreateBlog);
router.post("/edit/:id", checkSession, postEditBlogById);
router.get("/edit/:id", checkSession, getEditBlogById);
router.delete("/delete/:id", checkSession, deleteBlog);

module.exports = router;