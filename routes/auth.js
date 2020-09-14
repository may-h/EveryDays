const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const { User } = require("../models");

const router = express.Router();

/* /auth/join 
    회원가입 라우터. 같은 이메일로 가입한 사용자가 있는지 조회. 
    없다면 비밀번호를 암호화 하고 사용자 정보를 생성 
    - bcrypt 암호화 모듈 사용. 두번째 인자는 pbkdf2의 반복 횟수로 12이상 추천. 최대 31까지 가능. 
*/
router.post("/join", isNotLoggedIn, async (req, res, next) => {
  const { email, nick, password } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      req.flash("joinError", "이미 가입된 이메일입니다.");
      return res.redirect("/join");
    }

    const hash = await bcrypt.hash(password, 12);
    await User.create({
      email,
      nick,
      password: hash,
    });
    return res.redirect("/");
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

/* /auth/login 
    로그인 라우터 
    passport.authenticate('local') 미들웨어가 로컬 로그인 전략을 수행한다. 
    미들웨어인데 라우터 미들웨어 안에 들어 있다. 이럴 때 내부 미들웨어에 (req, res, next)인자를 제공해서 호출한다. 
    전략이 성공하거나 실패하면 authenticate 메서드의 콜백함수가 실행된다. 
    - req.login() => Passport는 req 객체에 login과 logout 메서드를 추가한다. 
                  => 해당 메서드는 passport.serializeUser를 호출한다. 
*/
router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }

    if (!user) {
      req.flash("loginError", info.message);
      return res.redirect("/");
    }

    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect("/");
    });
  })(req, res, next); //미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

/* //auth/logout/ 
    - req.logout() : 해당 메서드는 req.user 제거한다. 
*/
router.get("/logout", isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
