exports.checkSession = (req, res, next) => {
  let session = req.session;
  console.log(session);
  if (session.userid) {
    next();
  } else {
    res.redirect("/");
  }
};
