const express = require("express");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

const router = express.Router();

//프로필은 로그인 되어 있을 때만 볼 수 있다.
router.get("/profile", isLoggedIn, (req, res) => {
  res.render("profile", { title: "내 정보 - Everydays", user: req.user });
});

//회원가입은 로그인되어 있지 않을 때만 next()호출
router.get("/join", isNotLoggedIn, (req, res) => {
  res.render("join", {
    title: "회원가입 - NodeBird",
    user: req.user,
    // joinError: req.flash("joinError"),
  });
});

router.get("/", (req, res, next) => {
  res.render("main", {
    title: "NodeBird",
    twists: [],
    user: req.user,
    // logginError: req.flash('loginError');
  });
});

module.exports = router;
