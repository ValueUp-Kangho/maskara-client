import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { seouls } from "../../utils/seoul";
import { Register } from "../../api/authApi";
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
  top: 60%;
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

const SelectContainer = styled.select`
  width: 250px;
  display: inline-block;
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const RegisterButton = styled.button`
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

function RegisterPage() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      id: "",
      nickname: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        let data = {
          id: values.id,
          password: values.password,
          nickname: values.nickname,
          residence: values.residence,
        };
        console.log(data);
        Register(data).then((res) => {
          console.log(res);
          if ((res.code = 200)) {
            navigate("/login");
          }
        });
        setSubmitting(false);
      }, 500);
    },
  });

  return (
    <div>
      <Container>
        <Title>회원 가입</Title>
        <p />
        <Form onSubmit={formik.handleSubmit}>
          <InputContainer>
            아이디
            <p />
            <Input
              required
              type="text"
              id="id"
              placeholder="아이디를 입력해주세요"
              value={formik.values.id || ""}
              onChange={formik.handleChange}
            />
          </InputContainer>
          <InputContainer>
            닉네임
            <p />
            <Input
              required
              type="text"
              id="nickname"
              placeholder="닉네임"
              onChange={formik.handleChange}
            />
          </InputContainer>
          <InputContainer>
            비밀번호
            <p />
            <Input
              required
              type="password"
              id="password"
              placeholder="비밀번호"
              onChange={formik.handleChange}
            />
          </InputContainer>
          <InputContainer>
            비밀번호 확인
            <p />
            <Input
              required
              type="password"
              id="confirmPassword"
              placeholder="비밀번호 확인"
              onChange={formik.handleChange}
            />
          </InputContainer>
          <InputContainer>
            사는 지역
            <p />
            <SelectContainer
              //   onChange={(e) => selectChange(e)}
              onChange={formik.handleChange}
              defaultValue={"default"}
              required
              id="residence"
            >
              <option value={"default"} disabled>
                거주 지역을 선택해주세요.
              </option>
              {seouls.map((seoul) => (
                <option value={seoul.name} key={seoul.value}>
                  {seoul.name}
                </option>
              ))}
            </SelectContainer>
            <p />
          </InputContainer>
          <p />
          <RegisterButton htmlType="submit" type="primary">
            회원 가입
          </RegisterButton>
        </Form>
      </Container>
    </div>
  );
}

export default RegisterPage;
