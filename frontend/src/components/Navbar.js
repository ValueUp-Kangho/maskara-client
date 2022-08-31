import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBagShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { PrimaryColor } from "../utils/style";
import { Navigate, useNavigate } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #d3d3d3;
  align-items: center;
  margin-top: 20px;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 999;
`;

const TextContainer = styled.div``;

const HomeContainer = styled.button`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 116px;
  border: none;
  color: #ccc;
  background-color: white;
  text-align: center;
  line-height: 2.5rem;
  border-radius: 5px;
  font-weight: 900;
  text-decoration: none;
  padding-right: 40px;
`;
const StoreContainer = styled.button`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 116px;
  border: none;
  color: #ccc;
  background-color: white;
  text-align: center;
  line-height: 2.5rem;
  border-radius: 5px;
  font-weight: 900;
  text-decoration: none;
`;
const MypageContainer = styled.button`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 116px;
  border: none;
  color: #ccc;
  background-color: white;
  text-align: center;
  line-height: 2.5rem;
  border-radius: 5px;
  font-weight: 900;
  text-decoration: none;
  padding-left: 40px;
`;

function Navbar() {
  const [homeToggled, setHomeToggled] = useState(false);
  const [storeToggled, setStoreToggled] = useState(false);
  const [myPageToggled, setMyPageToggled] = useState(false);

  const navigate = useNavigate();

  const homeHandler = () => {
    setHomeToggled(true);
    setStoreToggled(false);
    setMyPageToggled(false);
    navigate("/");
  };

  const storeHandler = () => {
    setHomeToggled(false);
    setStoreToggled(true);
    setMyPageToggled(false);
    navigate("/store");
  };

  const myPageHandler = () => {
    setHomeToggled(false);
    setStoreToggled(false);
    setMyPageToggled(true);
    navigate("/mypage");
  };

  return (
    <NavbarContainer>
      {homeToggled ? (
        <HomeContainer onClick={homeHandler}>
          <FontAwesomeIcon
            icon={faHouse}
            size="lg"
            style={{ color: `${PrimaryColor}` }}
          />
          <TextContainer style={{ color: `${PrimaryColor}` }}>홈</TextContainer>{" "}
        </HomeContainer>
      ) : (
        <HomeContainer onClick={homeHandler}>
          <FontAwesomeIcon icon={faHouse} size="lg" />
          <TextContainer>홈</TextContainer>
        </HomeContainer>
      )}

      {storeToggled ? (
        <StoreContainer onClick={storeHandler}>
          <FontAwesomeIcon
            icon={faBagShopping}
            size="lg"
            style={{ color: `${PrimaryColor}` }}
          />
          <TextContainer style={{ color: `${PrimaryColor}` }}>
            스토어
          </TextContainer>
        </StoreContainer>
      ) : (
        <StoreContainer onClick={storeHandler}>
          <FontAwesomeIcon icon={faBagShopping} size="lg" />
          <TextContainer>스토어</TextContainer>
        </StoreContainer>
      )}

      {myPageToggled ? (
        <MypageContainer onClick={myPageHandler}>
          <FontAwesomeIcon
            icon={faUser}
            size="lg"
            style={{ color: `${PrimaryColor}` }}
          />
          <TextContainer style={{ color: `${PrimaryColor}` }}>
            마이
          </TextContainer>
        </MypageContainer>
      ) : (
        <MypageContainer onClick={myPageHandler}>
          <FontAwesomeIcon icon={faUser} size="lg" />
          <TextContainer>마이</TextContainer>
        </MypageContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
