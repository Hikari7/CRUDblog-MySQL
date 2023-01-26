const User = require("../model/auth.models");

exports.getCreateUser = (req, res) => {
  //   res.render("register", { model: {} });
  res.render("register");
};

exports.postCreateUser = (req, res) => {
  //req.bodyでHTMLのinputのnameで取得した値を受け取るようになる
  const { Name, Pw } = req.body;

  const newUser = new User(Name, Pw);
  newUser
    .save()
    .then(([row]) => {
      //affectedRowsは、間違いなく新しいblogがpostされたら1ってコンソールに出力される
      //   if (row.affectedRows === 1)
      res.redirect("/");
    })
    .catch((err) => console.error(err.message));
};
