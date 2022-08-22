import profile from "../assets/icon/profile.png";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const PointUp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  padding: 20px 0px;
  font-weight: 700;
`;

const ProfileImage = styled.img`
  border-radius: 5px;
  padding: 20px 20px;
  margin: 0 10px 0 50px;
  width: 80px;
  /* width: 50px; */
`;

const PointBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  width: 300px;
  height: 30px;
  margin-bottom: 20px;
  font-weight: 700;
`;

const MapQRContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  width: 350px;
  height: 150px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Map = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  width: 100px;
  height: 100px;
  margin: 30px;
  font-weight: 700;
`;

const Qr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  width: 100px;
  height: 100px;
  margin: 30px;
  font-weight: 700;
`;

function Home() {
  const navigate = useNavigate();

  const mapHandler = () => {
    navigate("/map");
  };

  const qrHandler = () => {
    navigate("/qr");
  };

  return (
    <Container>
      {/* 헤더와 포인트 div 사이 공간 Info? */}
      <Info></Info>
      {/* 포인트 정보 div */}
      <Point>
        <PointUp>
          <UserInfo>
            강호 님이 <br /> <br /> 지구를 아껴준 시간
          </UserInfo>
          <ProfileImage src={profile}></ProfileImage>
        </PointUp>
        <PointBar>포인트 300 P</PointBar>
      </Point>
      <MapQRContainer>
        <Map onClick={mapHandler}>
          수거함 <br /> 확인하기
        </Map>
        <Qr onClick={qrHandler}>
          {" "}
          QR 스캔 후 <br /> 폐마스크 <br />
          버리기
        </Qr>
      </MapQRContainer>
    </Container>
  );
}

export default Home;
