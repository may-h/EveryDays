const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const { User } = require("../models");

module.exports = (passport) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        //두번째 인자 -> 실제 전략 수행, 위에서 넣어준 email과 password는 async의 첫, 두번째 매개변수가 된다. done함수는 passport.authenticate의 콜백함수이다.
        try {
          const exUser = await User.findOne({ where: { email } });
          if (exUser) {
            const result = await bcrypt.compare(password, exUser.password);
            if (result) {
              done(null, exUser);
            } else {
              //done함수의 두번째 인자를 사용하지 않을 때는 로그인에 실패했을 때 뿐이다. 첫번째 인자 사용은 서버쪽에서 에러가 발생했을 때
              done(null, false, { message: "비밀번호가 일치하지 않습니다. " });
            }
          } else {
            done(null, false, { message: "가입되지 않은 회원입니다." });
          }
        } catch (err) {
          console.error(err);
          done(err);
        }
      }
    )
  );
};
