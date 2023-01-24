//リクエスト受付&レスポンス返却(routeからコールバック関数取ってくる)
//to render a view and sends the rendered HTML string to the client.
//get all data from the model

const Blogs = require("../model/blogs.models");

exports.getAllBlogs = (req, res) => {
  Blogs.find()
    .then(([rows]) => {
      //res.render() function: to render a view and sends the rendered HTML string to the client.

      res.render("books", { model: rows });
    })
    .catch((err) => console.error(err.message));
};

// exports.getCreateBlog;

// exports.postCreateBlog;

// exports.getEditBlogById;

// exports.postEditBlogById;

// exports.deleteBlog;

// };
