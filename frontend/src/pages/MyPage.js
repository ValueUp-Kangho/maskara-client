import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const Info = styled.div`
  margin: 30px 0;
`;

const Point = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  width: 350px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 300px;
  padding: 20px 0px;
  font-weight: 700;
  text-align: left;
`;

const PointBar = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 30px;
  margin-bottom: 20px;
  font-weight: 700;
  text-align: left;
`;

const ActLog = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  width: 350px;
  height: 260px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

function Home() {

  return (
    <Container>
      {/* 헤더와 포인트 div 사이 공간 Info? */}
      <Info></Info>
      {/* 포인트 정보 div */}
      <Point>
          <UserInfo>
            강호님, <br /> 
            x개의 마스크를 반납했어요<br /> 
            총 y포인트를 적립했어요!<br />
          </UserInfo>
        <PointBar>
          보유중인 코인
          <br />
          마스코인 10 msk
          </PointBar>
      </Point>
      <ActLog>
        
      </ActLog>
    </Container>
  );
}

export default Home;
