require("dotenv").config();
const path = require("path");
const express = require("express");
const sessions = require("express-session");
const methodOverride = require("method-override");

//🍪の設定
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

//mysqlを読み込ませる
const dbConnection = require("./util/mysql");

const blogsRouter = require("./routers/blogs.router");
const authRouter = require("./routers/auth.router");
const { request } = require("http");

//.useはmiddleware(req, resの仲介)の設定
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//クライアントにアクセスさせたい静的ファイルが格納されているフォルダを設定
app.use(express.static(path.join(__dirname, "public")));

//exporessの初期化設定(拡張子を省略して記述できる)
app.set("view engine", "ejs");
// app.set("views", "src/views");
app.set("views", path.join(__dirname, "views"));

//middleware from express-session
const oneDay = 24 * 60 * 60 * 1000;
app.use(
  sessions({
    secret: process.env.SECRET_KEY,
    saveUninitialized: true,
    // resave: true,
    resave: false,
    cookie: { maxAge: oneDay },
  })
);

// let session;

// // Route handler that sends a message at
// //app.get means “Run this on a GET request, for the given URL”
// //( It is only for handling GET HTTP requests.)
// app.get("/", (req, res) => {
//   session = req.session;

//   //  = req.body.email;
//   // session.userid = username;
//   // if (name) {
//   //   res.send(`Welcome! `);
//   // } else {
//   //   // cookieがなければindexにrenderされる;
//   //   res.render("index");
//   // }

//   // console.log(session);
//   res.render("index");
// });

// app.get("/logout", (req, res) => {
//   //sessionを切らすようにする
//   req.session.destroy();
//   res.redirect("/");
// });

//🌟app.use means “Run this on ALL requests”
//( It is generally used for introducing middlewares in your application and can handle all type of HTTP requests.)
app.use("/blogs", blogsRouter);
app.use("/", authRouter);
//routerにつなげて、処理の内容はmodelに書いていく

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  console.log(`Server is up on PORT ${PORT} 🚀`);

  //catch promise+
  const [data] = await dbConnection.query("SELECT 1"); //{"1":1}  resulting the value of "SELECT 1"
});

//✅user:idにした方がいい？
// app.post("/:userId", (req, res) => {
//   const { username, password } = req.body;

//   if (username === "admin" && password === "admin") {
//     // session = req.session;
//     // session.userid = username;
//     // res.send(`Welcome! ${username} <a href="/logout">Logout</a>`);
//   } else {
//     res.send("Wrong username or password");
//   }
// });
