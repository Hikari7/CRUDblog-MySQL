require("dotenv").config();
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

//mysqlを読み込ませる
const dbConnection = require("./util/mysql");

const app = express();

//.useはmiddleware(req, resの仲介)の設定
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//クライアントにアクセスさせたい静的ファイルが格納されているフォルダを設定
app.use(express.static(path.join(__dirname, "public")));

//exporessの初期化設定(拡張子を省略して記述できる)
app.set("view engine", "ejs");
app.set("views", "src/views");

// Route handler that sends a message at /
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get("/blogs", () => {
//routerにつなげて、処理の内容たいはmodelに書いていく
  
  res.json();
});

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
