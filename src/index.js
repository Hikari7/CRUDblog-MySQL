require("dotenv").config();
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

//mysqlを読み込ませる
const dbConnection = require("./util/mysql");

const blogsRouter = require("./routers/blogs.router");

const app = express();

//.useはmiddleware(req, resの仲介)の設定
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//クライアントにアクセスさせたい静的ファイルが格納されているフォルダを設定
app.use(express.static(path.join(__dirname, "public")));

//exporessの初期化設定(拡張子を省略して記述できる)
app.set("view engine", "ejs");
app.set("views", "src/views");

// Route handler that sends a message at
//app.get means “Run this on a GET request, for the given URL”
//( It is only for handling GET HTTP requests.)
app.get("/", (req, res) => {
  res.render("index", { title: "login" });
});

//🌟app.use means “Run this on ALL requests”
//( It is generally used for introducing middlewares in your application and can handle all type of HTTP requests.)
app.use("/blogs", blogsRouter);
//routerにつなげて、処理の内容はmodelに書いていく

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  console.log(`Server is up on PORT ${PORT} 🚀`);

  //catch promise
  const [data] = await dbConnection.query("SELECT 1"); //{"1":1}  resulting the value of "SELECT 1"
  //retrun the first element: data, and the second element: metadata
  //   console.log(connect);
  //   if (data)
  //   console.log("Successful connection to the MySQL database!");
});
