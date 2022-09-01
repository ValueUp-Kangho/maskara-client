import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Formik, useFormik } from "formik";
import { Login } from "../../api/authApi";
import { PrimaryColor } from "../../utils/style";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  flex-direction: column;
  border-radius: 5px;
  box-sizing: border-box;
  width: 350px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -40%);
  padding: 40px;
`;

const Title = styled.div`
  display: flex;
  height: 50px;
  font-size: xx-large;
  font-weight: 700;
`;

const Sub = styled.div`
  margin-bottom: 10px;
`;

const RegisterLink = styled.a`
  color: ${PrimaryColor};
  text-decoration: none;
  font-weight: 900;
  font-size: 18px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
  font-weight: 700;
`;

const Input = styled.input`
  width: 250px;
  display: inline-block;
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const LoginButton = styled.button`
  width: 250px;
  border: none;
  color: ${PrimaryColor};
  text-align: center;
  line-height: 2.5rem;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  height: 40px;
  margin: auto 0px;
  background-color: white;
  border: 1px solid #ccc;
`;

function LoginPage() {
  const navigate = useNavigate();
  const [formErrorMessage, setFormErrorMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      id: "",
      password: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        let data = {
          id: values.id,
          password: values.password,
        };

        Login(data).then((res) => {
          console.log(res);
          if (res.code === 200) {
            window.localStorage.setItem("X-AUTH-TOKEN", res.data);
            navigate("/");
          }
        });
        setSubmitting(false);
      }, 500);
    },
  });
  return (
    <div>
      <Container>
        <Title>로그인</Title>
        <Sub>
          또는 <RegisterLink href="/register">회원가입</RegisterLink>
        </Sub>
        <Form onSubmit={formik.handleSubmit}>
          <p />
          <InputContainer>
            아이디
            <p />
            <Input
              required
              id="id"
              type="text"
              name="id"
              placeholder="아이디를 입력해주세요."
              onChange={formik.handleChange}
              value={formik.values.id || ""}
            />
          </InputContainer>
          <InputContainer>
            비밀번호
            <p />
            <Input
              required
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </InputContainer>
          <p />
          <LoginButton
            // onClick={handleSubmit}
            htmlType="submit"
            type="primary"
          >
            로그인
          </LoginButton>
        </Form>
      </Container>
    </div>
  );
}

export default LoginPage;
