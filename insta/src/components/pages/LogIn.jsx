import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Layout,
  Main,
  Box,
  ImgLogo,
  Form,
  Input,
  BtnSubmit,
  SignUpWrapper,
  FBLogin,
  PasswordReset,
} from "../atoms/login";

import authApis from "../../apis/auth";
import instance from "../../apis";

const LogIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  const { userName, password } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { success, message, token } = await authApis.logIn(form);
    if (!success) return alert(message);

    instance.defaults.headers.common["Authorization"] = "Bearer" + token;

    // alert("로그인 성공");
    // navigate("/");
  };
  return (
    <Layout>
      <Main>
        <Box>
          <ImgLogo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="전화번호, 사용자 이름 또는 이메일"
              name="userName"
              onChange={handleChange}
              value={userName}
              required
            />
            <Input
              placeholder="비밀번호"
              type="password"
              name="password"
              onChange={handleChange}
              value={password}
              required
            />
            <BtnSubmit>로그인</BtnSubmit>
          </Form>
          <FBLogin>Facebook으로 로그인</FBLogin>
          <PasswordReset>비밀번호를 잊으셨나요 ?</PasswordReset>
        </Box>
        <Box>
          <SignUpWrapper>
            계정이 없으신가요? <Link to="/sign-up">가입하기</Link>
          </SignUpWrapper>
        </Box>
      </Main>
    </Layout>
  );
};

export default LogIn;
