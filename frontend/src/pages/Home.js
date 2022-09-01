import profile from "../assets/icon/profile.png";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import { Auth, ResidenceRank } from "../api/authApi";
import { Autoplay } from "swiper";
import { PrimaryColor } from "../utils/style";
import Navbar from "../components/Navbar";
import Store from "../components/Store";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const PrimaryColorContainer = styled.div`
  color: ${PrimaryColor};
  width: 50px;
`;

const Info = styled.div`
  margin: 65px 0 20px 0;
  display: flex;
  text-align: center;
  flex-direction: column;
`;

const RankContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-weight: 900;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  color: ${PrimaryColor};
`;

const SwiperContainer = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  font-size: 22px;
  font-weight: 900;
  color: ${PrimaryColor};
  /* border-top: 1px solid #ccc; */
`;

const Point = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
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
  width: 140px;
  padding: 20px 0px;
  font-weight: 700;
  flex-direction: column;
`;

const MaskCountContainer = styled.div`
  text-decoration: underline;
  text-decoration-color: ${PrimaryColor};
  text-decoration-thickness: 3px;
  font-size: 18px;
`;

const NicknameContainer = styled.div`
  text-decoration: underline;
  text-decoration-color: ${PrimaryColor};
  text-decoration-thickness: 3px;
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
  border-radius: 10px;
  border: 1px solid #d3d3d3;
  width: 300px;
  height: 30px;
  margin-bottom: 20px;
  font-weight: 700;
  background-color: ${PrimaryColor};
  color: white;
`;

const MapQRContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  width: 350px;
  height: 150px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Map = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  margin: 30px 0px 30px 50px;
  font-weight: 700;
`;

const Qr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  margin: 30px 50px 30px 0px;
  font-weight: 700;
`;

function Home() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState();
  const [point, setPoint] = useState(10);
  const [ranks, setRanks] = useState([]);
  const [count, setCount] = useState();

  const mapHandler = () => {
    navigate("/map");
  };

  const qrHandler = () => {
    navigate("/qr");
  };

  useEffect(() => {
    let data = {
      "X-AUTH-TOKEN": window.localStorage.getItem("X-AUTH-TOKEN"),
    };

    Auth(data).then((res) => {
      setNickname(res.data.nickname);
      setPoint(res.data.point);
      setCount(res.data.count);
    });

    ResidenceRank(data).then((res) => {
      console.log(res.data);
      setRanks(res.data);
    });
    console.log(ranks);
  }, []);

  return (
    <Container>
      {/* 헤더와 포인트 div 사이 공간 Info */}
      <Info>
        <RankContainer>서울시 마스크 수거 순위</RankContainer>
        <SwiperContainer>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {ranks.map((rank, index) => (
              <SwiperSlide key={`Residence-${rank.residence}`}>
                {index + 1}위 {rank.residence} {rank.count}회
              </SwiperSlide>
            ))}
            <SwiperSlide>모두 동참해주세요!</SwiperSlide>
            {/* <SwiperSlide>1위 노원구</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide> */}
          </Swiper>
        </SwiperContainer>
      </Info>
      {/* 포인트 정보 div */}
      <Point>
        <PointUp>
          <UserInfo>
            <NicknameContainer>{nickname}님,</NicknameContainer>
            <br /> <br />
            마스크 <MaskCountContainer>{count}</MaskCountContainer>개를
            <br />
            반납하셨습니다!
          </UserInfo>
          <a href="/mypage">
            <ProfileImage src={profile}></ProfileImage>
          </a>
        </PointUp>
        <PointBar>마스코인 {point} msk</PointBar>
      </Point>
      <MapQRContainer>
        <Map onClick={mapHandler}>
          수거함 <br />
          확인하기
        </Map>
        <Qr onClick={qrHandler}>
          {" "}
          QR 스캔 후 <br /> 폐마스크 <br />
          버리기
        </Qr>
      </MapQRContainer>
      <div style={{ marginBottom: "150px" }}>
        <Store />
      </div>
      <Navbar />
    </Container>
  );
}

export default Home;
