exports.isLoggedIn = (req, res, next) => {
  //passport는 req객체에 isAuthenticated 메서드를 추가한다. 로그인 여부 판단 가능.
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send("로그인필요");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/");
  }
};
