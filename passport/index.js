const local = require("./localStrategy");
const { User } = require("../models");

module.exports = (passport) => {
  // serializeUser : req.session 객체에 어드민의 id만 저장하라고 명령
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // deserializeUser : 매 요청시 실행(passpor.session()미들웨어가 이 메소드 호출)
  //serializeUser에서 세션에 저장했던 id를 받아 사용자 정보를 조회하여 req.user에 저장.
  passport.deserializeUser((id, done) => {
    User.findOne({ where: { id } })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });

  local(passport);
};
