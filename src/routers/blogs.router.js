// //create a new router object

const router = require("express").Router();

const {
  getAllBlogs,
  getCreateBlog,
  postCreateBlog,
  getEditBlogById,
  postEditBlogById,
  deleteBlog,

  getUserBlog,

} = require("../controller/blogs.controller");

router.get("/all", getAllBlogs);
router.get("/create", getCreateBlog);
router.post("/create", postCreateBlog);
router.post("/edit/:id", postEditBlogById);
router.get("/edit/:id", getEditBlogById);
router.delete("/delete/:id", deleteBlog);

router.get("/:id/blog", getUserBlog);

module.exports = router;
