//リクエスト受付&レスポンス返却(routeからコールバック関数取ってくる)
//to render a view and sends the rendered HTML string to the client.
//get all data from the model
const Blog = require("../model/blogs.models");

exports.getAllBlogs = (req, res) => {
  Blog.find()
    .then(([rows]) => {
      //dataをsql(modelのfindメソッドから取得)
      //modelがmodelsで作られたrowsのオブジェクトを取ることができる

      //modelで作られたfindメソッドを使って、then.catchでその後の処理を書く
      //res.renderはexpressのメソッドでファイルを返す、第二引数でkey:valueをオブジェクトを設定してそのファイル内で使えるようにする
      res.render("blogs", { model: rows });
    })
    .catch((err) => console.error(err.message));
};

exports.getCreateBlog = (req, res) => {
  res.render("create", { model: {} });
};

exports.postCreateBlog = (req, res) => {
  //req.bodyでHTMLのinputのnameで取得した値を受け取るようになる
  const { Title, Date, Article } = req.body;

  const newBlog = new Blog(Title, Date, Article);
  newBlog
    .save()
    .then(([row]) => {
      //affectedRowsは、間違いなく新しいblogがpostされたら1ってコンソールに出力される
      if (row.affectedRows === 1) res.redirect("/blogs/all");
    })
    .catch((err) => console.error(err.message));
};

//GetとPostはセットなので！
exports.getEditBlogById = (req, res) => {
  //このidはBlog.findBy(id)に渡されるよ
  const id = req.params.id;
  Blog.findById(id)
    .then(([row]) => {
      res.render("edit", { model: row[0] });
    })
    .catch((err) => console.log(err.message));
};

exports.postEditBlogById = (req, res) => {
  const id = req.params.id;
  const { Title, Date, Article } = req.body;

  //4つのオブジェクトをまとめる
  const dataToUpdate = { id, Title, Date, Article };
  Blog.updateOne(dataToUpdate)
    .then(() => {
      res.redirect("/blogs/all");
    })
    .catch((err) => console.log(err.message));
};

exports.deleteBlog = (req, res) => {
  const id = req.params.id;
  //redirectするだけ
  Blog.deleteOne(id)
    .then(res.redirect("/blogs/all"))
    .catch((err) => console.log(err.message));
};

// exports.getUserBlog = (req, res) => {
//   const id = req.params.id;
// };
