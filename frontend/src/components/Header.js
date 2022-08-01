import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000000;
  align-items: center;
  margin: 0px 5px;
  padding-bottom: 10px;
`;

const Logo = styled.img`
  width: 100px;
  cursor: pointer;
`;

const Bars = styled.div`
  display: flex;
  align-items: center;
  pading: 0 10px;
`;

function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const navigate = useNavigate();

  const logoHandler = () => {
    navigate("/");
  };

  const barHandler = () => {};
  
  return (
    <HeaderContainer>
      <Logo src={logo} onClick={logoHandler}></Logo>
      <Bars onClick={barHandler}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </Bars>
    </HeaderContainer>
  );
}

export default Header;
