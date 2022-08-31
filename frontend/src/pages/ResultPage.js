import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { PrimaryColor } from "../utils/style";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid #ccc; */
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

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${PrimaryColor};
  width: 300px;
  height: 150px;
`;
const CircleContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: white;
`;
const TopBottomContainer = styled.div`
  display: flex;
  color: white;
  font-weight: 900;
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 300px;
  border: 1px solid #ccc;
`;
const DateContainer = styled.div`
  display: flex;
  font-weight: 900;
  font-size: 14px;
  width: 250px;
  margin: 40px 0 20px 0;
`;
const LocationContainer = styled.div`
  display: flex;
  font-weight: 900;
  font-size: 14px;
  width: 250px;
  margin: 20px 0 20px 0;
`;
const CoinContainer = styled.div`
  display: flex;
  font-weight: 900;
  font-size: 14px;
  width: 250px;
  margin: 20px 0 20px 0;
`;
const SumCoinContainer = styled.div`
  display: flex;
  font-weight: 900;
  font-size: 14px;
  border-top: 1px solid #ccc;
  width: 250px;
  margin: 20px 0 40px 0;
  padding-top: 30px;
`;
const Wallet = styled.a`
  /* text-decoration: line-through; */
  margin: 20px 0 40px 0;
  font-weight: 900;
  font-size: 14px;
  color: #ccc;
`;

const RegisterButton = styled.a`
  width: 300px;
  border: none;
  color: white;
  text-align: center;
  line-height: 2.5rem;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  height: 40px;
  margin: auto 0px;
  background-color: ${PrimaryColor};
  border: 1px solid #ccc;
`;

function ResultPage() {
  const [date, setDate] = useState();
  const [location, setLocation] = useState();
  const [pointSum, setPointSum] = useState();

  let { state } = useLocation();

  useEffect(() => {
    setDate(state.date);
    setLocation(state.location);
    setPointSum(state.pointSum);
  }, []);

  return (
    <div>
      <Title>
        <SubTitle>회원 정보 수정</SubTitle>
      </Title>
      <Container>
        <TopContainer>
          <CircleContainer>
            <FontAwesomeIcon icon={faCircleCheck} size="2x" />
          </CircleContainer>
          <TopBottomContainer>반납 완료</TopBottomContainer>
        </TopContainer>
        <BottomContainer>
          <DateContainer>적립 일자 {date}</DateContainer>
          <LocationContainer>반납 위치 {location}</LocationContainer>
          <CoinContainer>적립 코인 마스코인 +1 msk</CoinContainer>
          <SumCoinContainer>보유 코인 마스코인{pointSum}msk</SumCoinContainer>
        </BottomContainer>
        <Wallet href="/mypage">적립 내역 전체보기</Wallet>
        <RegisterButton htmlType="submit" type="primary">
          완료
        </RegisterButton>
      </Container>
    </div>
  );
}

export default ResultPage;
