import React, { useState } from "react";
import styled from "styled-components";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapCloseButton = styled.button`
  position: absolute;
  top: 600px;
  left: 50px;
  background-color: #ffffff;
  color: #000000;
  width: 120px;
  height: 40px;
  font-size: 1rem;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  border-radius: 5px;
  font-weight: 700;
`;

const QrScanButton = styled.button`
  position: absolute;
  top: 600px;
  right: 50px;
  background-color: #ffffff;
  color: #000000;
  width: 120px;
  height: 40px;
  font-size: 1rem;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  border-radius: 5px;
  font-weight: 700;
`;

function Map() {
  const navigate = useNavigate();
  const [myLocation, setMyLocation] = useState();
  const mapCloseHandler = () => {
    navigate("/");
  };
  const qrHandler = () => {
    navigate("/qr");
  };
  return (
    <div>
      <RenderAfterNavermapsLoaded
        ncpClientId={"gmalpr55mi"}
        error={<p>Maps Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <MapContainer>
          <NaverMap
            style={{ width: "100%", height: "600px", textAlign: "center" }}
            center={{ lat: 37.497175, lng: 127.027926 }}
            mapTypeControl={false}
            logoControl={false}
            mapDataControl={false}
            scaleControl={false}
          ></NaverMap>
          <MapCloseButton onClick={mapCloseHandler}>지도 닫기</MapCloseButton>
          <QrScanButton onClick={qrHandler}>
            <FontAwesomeIcon icon={faQrcode} style={{ paddingRight: "10px" }} />
            스캔 하기
          </QrScanButton>
        </MapContainer>
      </RenderAfterNavermapsLoaded>
    </div>
  );
}

export default Map;
