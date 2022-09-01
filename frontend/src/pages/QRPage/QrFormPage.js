import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import { PrimaryColor } from "../../utils/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { QRForm } from "../../api/qrApi";

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
  margin-left: 10px;
  margin-right: 80px;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin-right: 100px;
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

function QrFormPage() {
  const navigate = useNavigate();

  // let { state } = useLocation();
  // const collectionBoxSerialNumber = state.collectionBoxSerialNumber;
  const [location, setLocation] = useState();
  const [date, setDate] = useState();
  const [point, setPoint] = useState();
  const [pointSum, setPointSum] = useState();
  const [maskCount, setMaskCount] = useState();

  const formik = useFormik({
    initialValues: {
      collectionBoxSerialNumber: "",
      maskCount: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        let token = {
          "X-AUTH-TOKEN": window.localStorage.getItem("X-AUTH-TOKEN"),
        };

        let data = {
          collectionBoxSerialNumber: values.collectionBoxSerialNumber,
          maskCount: values.maskCount,
        };

        console.log(data);
        QRForm(token, data).then((res) => {
          console.log(res);
          if ((res.code = 200)) {
            setMaskCount(res.data.maskCount);
            setLocation(res.data.location);
            setDate(res.data.date);
            setPointSum(res.data.sumPoint);
            setPoint(res.data.point);
            alert("마스크 폐기가 완료되었습니다!");
            navigate("/result", {
              state: {
                maskCount: res.data.maskCount,
                location: res.data.location,
                date: res.data.date,
                pointSum: res.data.sumPoint,
                point: res.data.point,
              },
            });
          }
        });
        setSubmitting(false);
      }, 500);
    },
  });

  useEffect(() => {
    // window.location.reload(true);
  }, []);

  const QrAngleHandler = () => {
    navigate("/qr");
  };

  return (
    <div>
      {" "}
      <Title>
        <AngleLeftButton onClick={QrAngleHandler}>
          <FontAwesomeIcon
            icon={faAngleLeft}
            // style={{ paddingRight: "120px" }}
            size="2x"
          />
        </AngleLeftButton>
        <SubTitle>마스크 폐기</SubTitle>
      </Title>
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <InputContainer>
            폐마스크 수거함 일련번호
            <p />
            <Input
              required
              type="text"
              id="collectionBoxSerialNumber"
              defaultValue={formik.values.collectionBoxSerialNumber || ""}
              //   value={formik.values.collectionBoxSerialNumber}
              onChange={formik.handleChange}
              // disabled
            />
          </InputContainer>
          <InputContainer>
            폐기할 마스크 개수
            <p />
            <Input
              required
              type="text"
              id="maskCount"
              placeholder="폐기 마스크 개수"
              value={formik.values.maskCount || ""}
              onChange={formik.handleChange}
            />
          </InputContainer>
          <p />
          <RegisterButton htmlType="submit" type="primary">
            마스크 수거하기
          </RegisterButton>
        </Form>
      </Container>
    </div>
  );
}

export default QrFormPage;
