const User = require("../model/auth.models");

//index(login pageに飛ぶ)
exports.getLoginPage = (req, res) => {
  res.render("index");
};

//(register pageに飛ぶ)
exports.getRegister = (req, res) => {
  res.render("register");
};

//register
exports.postRegister = (req, res) => {
  //req.bodyでHTMLのinputのnameで取得した値を受け取るようになる
  const { Name, Pw } = req.body;

  const newUser = new User(Name, Pw);
  newUser
    .save()
    .then(() => {
      //affectedRowsは、間違いなく新しいblogがpostされたら1ってコンソールに出力される
      //   if (row.affectedRows === 1)
      res.redirect("/");
    })
    .catch((err) => console.error(err.message));
};

exports.postLogin = (req, res) => {
  //make a valiation here?
};
