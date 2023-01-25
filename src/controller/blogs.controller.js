//リクエスト受付&レスポンス返却(routeからコールバック関数取ってくる)
//to render a view and sends the rendered HTML string to the client.
//get all data from the model

const Blogs = require("../model/blogs.models");

exports.getAllBlogs = (req, res) => {
  Blogs.find()
    .then(([rows]) => {
      //dataをsql(modelのfindメソッドから取得)
      res.render("blogs", { model: rows });
    })
    .catch((err) => console.error(err.message));
};

// exports.getCreateBlog;

// exports.postCreateBook = (req, res) => {
//   const { BlogID, Title, Article } = req.body;

//   const newBook = new Book(BlogID, Title, Article);
//   newBook
//     .save()
//     .then(() => {
//       res.redirect("/books/all");
//     })
//     .catch((err) => console.error(err.message));
// };

// exports.getEditBlogById;

// exports.postEditBlogById;

// exports.deleteBlog;

// };
