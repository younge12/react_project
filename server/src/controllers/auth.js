import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UserService from "../services/users.js";

const secretKey = "asdferwfsdf45w6er#$@#";

const AuthController = {
  postAuthSignup: async (req, res) => {
    //1. user_name 중복검사 : DB에 유저가 보낸 id가 중복인지
    //1-1. 있으면 회원가입 실패
    //2. 비밀번호 암호화 : 평문과 salt(랜던값)을 조합해서 비밀번호 암호화
    //3. user_name, password, name, salt를 DB 저장

    const { userName, password, name } = req.body;
    const duplicatedUser = await UserService.getUserByUsername({
      userName: userName,
    });

    if (duplicatedUser) {
      return res
        .status(409)
        .send({ success: false, message: "중복된 아이디가 있습니다." });
    }

    const salt = await bcrypt.genSalt();
    const hashedPW = await bcrypt.hash(password, salt);

    await UserService.createUser({ userName, name, salt, password: hashedPW });

    res.send({ success: true });
  },
  postAuthLogin: async (req, res) => {
    const { userName, password } = req.body;

    const user = await UserService.getUserByUsername({ userName });

    if (!user) {
      return res.status(401).send({
        success: false,
        message: "아이디가 존재하지 않습니다.",
      });
    }

    const hashedPW = await bcrypt.hash(password, user.salt);

    if (hashedPW !== user.password) {
      return res
        .status(401)
        .send({ success: false, message: "비밀번호가 일치하지 않습니다." });
    }

    const payload = {
      userId: user.id,
    };

    const option = {
      expiresIn: "1d",
    };

    const token = jwt.sign(payload, secretKey, option);
    res.send({ success: true, token });
  },
};

export default AuthController;
