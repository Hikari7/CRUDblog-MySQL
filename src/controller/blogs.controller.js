//リクエスト受付&レスポンス返却(routeからコールバック関数取ってくる)
//to render a view and sends the rendered HTML string to the client.
//get all data from the model

const Blog = require("../model/blogs.models");

exports.getAllBlogs = (req, res) => {
  Blog.find()
    .then(([rows]) => {
      //dataをsql(modelのfindメソッドから取得)
      res.render("blogs", { model: rows });
    })
    .catch((err) => console.error(err.message));
};

exports.getCreateBlog = (req, res) => {
  res.render("create", { model: {} });
};

exports.postCreateBlog = (req, res) => {
  const { Title, Date, Article } = req.body;

  const newBlog = new Blog(Title, Date, Article);
  newBlog
    .save()
    .then(() => {
      res.redirect("/blogs/all");
    })
    .catch((err) => console.error(err.message));
};

// exports.getEditBlogById;

// exports.postEditBlogById;

// exports.deleteBlog;

// };
