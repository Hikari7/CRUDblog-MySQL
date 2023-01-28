const User = require("../model/auth.models");

//index(login pageに飛ぶ)
exports.getLoginPage = (req, res) => {
  req.session.destroy();
  res.render("index");
};

//(register pageに飛ぶ)
exports.getRegister = (req, res) => {
  res.render("register", { model: {} });
};

//register
exports.postRegister = (req, res) => {
  //req.bodyでHTMLのinputのnameで取得した値を受け取るようになる
  const { Name, Pw } = req.body;

  const newUser = new User(Name, Pw);
  newUser
    .save()
    .then(([row]) => {
      //affectedRowsは、間違いなく新しいblogがpostされたら1ってコンソールに出力される
      //   if (row.affectedRows === 1)
      if (row.affectedRows === 1) res.redirect("/");
      console.log("success!");
    })
    .catch((err) => console.error(err.message));
};

exports.postLoginPage = (req, res) => {
  const { Name, Pw } = req.body;
  User.validate(Name, Pw)
    .then(([data]) => {
      if (data.length === 0) {
        res.redirect("/");
      } else {
        session = req.session;
        session.userid = Name;
        console.log(Name);
        res.redirect("/blogs/all");
        // res.render("blogs", Name);
      }
    })
    .catch((err) => console.error(err.message));
};

exports.getLogoutPage = (req, res) => {
  req.session.destroy();
  res.render("index");
};
