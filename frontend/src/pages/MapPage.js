import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { GetMarkerDetail, GetMarkerList } from "../api/mapApi";
import { PrimaryColor } from "../utils/style";

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
  width: 130px;
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
  width: 130px;
  height: 40px;
  font-size: 1rem;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  border-radius: 5px;
  font-weight: 700;
  z-index: 999;
`;

// const DetailContainer = styled.div`
//   border-radius: 5px;
// `;

const MarkerDetailContainer = styled.div`
  /* background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/box_movie.png")
    no-repeat; */
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 300px;
  height: 200px;
  font-weight: 900;
  font-family: roboto-mono;
  overflow: auto;
  outline: 0;
  /* margin: -10px 0px -10px -10px; */
  /* padding: 20px 10px; */
`;

const DetailTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
`;

const DetailTopLeft = styled.div`
  display: flex;
  font-size: 15px;
`;

const DetailTopRight = styled.button`
  border: none;
  color: ${PrimaryColor};
  text-align: center;
  width: 20px;
  /* line-height: 2.5rem; */
  border-radius: 5px;
`;

const DetailBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DetailBottomTop = styled.img`
  width: 300px;
  height: 150px;
  resize: both;
  background-size: 200px 100px;
  margin-bottom: 50px;
`;

const DetailBottomBottom = styled.div`
  display: flex;
  width: 100px;
  font-size: 12px;
  margin-top: 30px;
  text-align: center;
`;

function MapPage() {
  const [myLocation, setMyLocation] = useState({
    center: {
      lat: 37.5590083,
      lng: 126.99869,
    },
    errMsg: null,
    isLoading: true,
  });
  const [markers, setMarkers] = useState([]);
  const navigate = useNavigate();

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
    let data = {
      "X-AUTH-TOKEN": window.localStorage.getItem("X-AUTH-TOKEN"),
    };

    GetMarkerList(data).then((res) => {
      console.log(res.data);
      setMarkers(res.data);
    });
  }, []);

  // console.log(myLocation); // 현재 내 위치 위도, 경도 정보

  const MarkerDetail = ({ id }) => {
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [imgUrl, setImgUrl] = useState();

    useEffect(() => {
      let data = {
        "X-AUTH-TOKEN": window.localStorage.getItem("X-AUTH-TOKEN"),
      };
      GetMarkerDetail(data, id).then((res) => {
        console.log(res);
        setName(res.data.name);
        setAddress(res.data.address);
        setImgUrl(res.data.imgUrl);
      });
    }, []);

    return (
      // <DetailContainer>
      <MarkerDetailContainer>
        <DetailTopContainer>
          <DetailTopLeft>{name}</DetailTopLeft>
        </DetailTopContainer>
        <DetailBottomContainer>
          <DetailBottomTop src={imgUrl}></DetailBottomTop>
          <DetailBottomBottom>위치: {address}</DetailBottomBottom>
        </DetailBottomContainer>
      </MarkerDetailContainer>
      // </DetailContainer>
    );
  };

  for (let i = 0; i < markers.length; i++) {
    markers[i].content = <MarkerDetail id={markers[i].id} />;
  }
  console.log(markers);

  const EventMarkerContainer = ({ position, content }) => {
    // const [isOpen, setIsOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
      <MapMarker position={position} onClick={() => setIsOpen(!isOpen)}>
        {isOpen && content}
      </MapMarker>
    );
  };

  const mapCloseHandler = () => {
    navigate("/");
  };
  const qrHandler = () => {
    navigate("/qr");
  };

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

          {markers.map((marker) => (
            <EventMarkerContainer
              key={marker.id}
              position={{
                lat: `${marker.latitude}`,
                lng: `${marker.longitude}`,
              }} // 마커를 표시할 위치
              image={{
                src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
                size: {
                  width: 24,
                  height: 35,
                }, // 마커이미지의 크기입니다
              }}
              title={marker.name} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              content={marker.content}
            />
          ))}
          {/* 추가로 마커 생성이 완료되면 지도 level에 따라서 다시 마커의 개수를 보여줄 수 있도록 response 받아야함 */}
          {/* {!myLocation.isLoading && <MapMarker position={myLocation.center} />} */}
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
