import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { seouls } from "../../utils/seoul";

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
  top: 50%;
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
  color: #000;
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
  return (
    <div>
      <Container>
        <Title>회원 가입</Title>
        <p />
        <Form>
          <InputContainer>
            아이디
            <p />
            <Input />
          </InputContainer>
          <InputContainer>
            비밀번호
            <p />
            <Input />
          </InputContainer>
          <InputContainer>
            비밀번호 확인
            <p />
            <Input />
          </InputContainer>
          <InputContainer>
            사는 지역
            <p />
            <SelectContainer>
              {seouls.map((seoul) => (
                <option value={seoul.value}>{seoul.name}</option>
              ))}
            </SelectContainer>
            <p />
          </InputContainer>
          <p />
          <RegisterButton>회원 가입</RegisterButton>
        </Form>
      </Container>
    </div>
  );
}

export default RegisterPage;
