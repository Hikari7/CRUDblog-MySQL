exports.checkSession = (req, res, next) => {
  let session = req.session;

  if (session.userid) {
    next();
  } else {
    res.redirect("/");
  }
};
