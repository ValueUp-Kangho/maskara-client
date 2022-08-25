import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapCloseButton = styled.button`
  position: absolute;
  top: 550px;
  left: 50px;
  background-color: #ffffff;
  color: #4dad6c;
  width: 120px;
  height: 40px;
  font-size: 1rem;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  border-radius: 5px;
  font-weight: 700;
  z-index: 999;
`;

const QrScanButton = styled.button`
  position: absolute;
  top: 550px;
  right: 50px;
  background-color: #4dad6c;
  color: #ffffff;
  width: 120px;
  height: 40px;
  font-size: 1rem;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  border-radius: 5px;
  font-weight: 700;
  z-index: 999;
`;

function MapPage() {
  const navigate = useNavigate();
  const [myLocation, setMyLocation] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  const mapCloseHandler = () => {
    navigate("/");
  };
  const qrHandler = () => {
    navigate("/qr");
  };

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setMyLocation((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setMyLocation((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setMyLocation((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할 수 없습니다.",
        isLoading: false,
      }));
    }

    // getMarker 여기 들어가야함.
  }, []);
  console.log(myLocation); // 현재 내 위치 위도, 경도 정보

  return (
    <div>
      <MapContainer>
        <Map
          center={myLocation.center}
          style={{
            // 지도의 크기
            width: "100%",
            height: "650px",
          }}
          level={4} // 지도의 확대 레벨
          draggable={true}
        >
          {/* map 으로 마커 여러개 표시하기 */}
          {/* 
          {markers.map((position, index) => {
            <MapMarker
          key={`${position.title}-${position.latlng}`}
          position={position.latlng} // 마커를 표시할 위치
          image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 35
            }, // 마커이미지의 크기입니다
          }}
          title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        />
          })}
          
          */}

          {/* 추가로 마커 생성이 완료되면 지도 level에 따라서 다시 마커의 개수를 보여줄 수 있도록 response 받아야함 */}
          {!myLocation.isLoading && <MapMarker position={myLocation.center} />}
        </Map>

        <MapCloseButton onClick={mapCloseHandler}>지도 닫기</MapCloseButton>
        <QrScanButton onClick={qrHandler}>
          <FontAwesomeIcon icon={faQrcode} style={{ paddingRight: "10px" }} />
          스캔 하기
        </QrScanButton>
      </MapContainer>
    </div>
  );
}

export default MapPage;
