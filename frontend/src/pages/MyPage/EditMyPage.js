import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Edit } from "../../api/authApi";
import { seouls } from "../../utils/seoul";
import { PrimaryColor } from "../../utils/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

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
  top: 47%;
  left: 50%;
  transform: translate(-50%, -40%);
  padding: 40px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  margin-top: 65px;
  font-weight: 700;
  color: #a9a9a9;
  align-items: center;
`;

const AngleLeftButton = styled.button`
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  background-color: white;
  color: #a9a9a9;
  border: none;
  margin-right: 80px;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin-right: 90px;
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

function EditMyPage() {
  const navigate = useNavigate();
  const [myId, setMyId] = useState();
  const [nickname, setNickname] = useState();
  const [residence, setResidence] = useState();

  const angleHandler = () => {
    navigate("/mypage");
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      nickname: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        let data = {
          nickname: values.nickname,
          residence: values.residence,
        };
        console.log(data);
        // Register(data).then((res) => {
        //   console.log(res);
        //   if ((res.code = 200)) {
        //     navigate("/login");
        //   }
        // });
        setSubmitting(false);
      }, 500);
    },
  });

  useEffect(() => {
    let data = {
      "X-AUTH-TOKEN": window.localStorage.getItem("X-AUTH-TOKEN"),
    };

    Edit(data).then((res) => {
      console.log(res);
      setMyId(res.data.id);
      setNickname(res.data.nickname);
      setResidence(res.data.residence);
    });
  }, []);

  return (
    <div>
      <Title>
        <AngleLeftButton onClick={angleHandler}>
          <FontAwesomeIcon
            icon={faAngleLeft}
            // style={{ paddingRight: "120px" }}
            size="2x"
          />
        </AngleLeftButton>
        <SubTitle>회원 정보 수정</SubTitle>
      </Title>
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <InputContainer>
            아이디
            <p />
            <Input
              required
              type="text"
              id="id"
              placeholder="아이디를 입력해주세요"
              value={`${myId}`}
              onChange={formik.handleChange}
              disabled
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
              value={`${nickname}`}
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
                <option value={seoul.value} key={seoul.value}>
                  {seoul.name}
                </option>
              ))}
            </SelectContainer>
            <p />
          </InputContainer>
          <p />
          <RegisterButton htmlType="submit" type="primary">
            회원 정보 수정
          </RegisterButton>
        </Form>
      </Container>
    </div>
  );
}

export default EditMyPage;
