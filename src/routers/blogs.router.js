// //create a new router object

const router = require("express").Router();

const {
  getAllBlogs,
  getCreateBlog,
  postCreateBlog,
  //   getEditBlogById,
  // getBlogById,
  //   putEditBlogById,
  //   deleteBlog,
} = require("../controller/blogs.controller");

router.get("/all", getAllBlogs);
router.get("/create", getCreateBlog);
router.post("/create", postCreateBlog);
// router.get("/:id", getBlogById);
// // router.get("/edit/:id", getEditBlogById);
// // router.put("/edit/:id", putEditBlogById);
// // router.delete("/delete/:id", deleteBlog);

module.exports = router;

//postするときはrenderしない
