//create a new router object

const router = require("express").Router();

const {
  getAllBlogs,
  getCreateBlog,
  postCreateBlog,
  getEditBlogById,
  postEditBlogById,
  deleteBlog,
} = require("../controller/blogs.controller");

router.get("/all", getAllBlogs);
router.get("/edit/:id", getEditBlogById);
router.post("/edit/:id", postEditBlogById);
router.get("/edit/:id", postEditBlogById);
router.get("/create", getCreateBlog);
router.post("/create", postCreateBlog);
router.delete("/delete/:id", deleteBlog);

module.exports = router;


//routeを作ったので、