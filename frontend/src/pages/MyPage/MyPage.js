import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Logout, MyRecords } from "../../api/authApi";
import Navbar from "../../components/Navbar";
import { PrimaryColor } from "../../utils/style";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 133px;
`;

const LogoutContainer = styled.button`
  border: none;
  color: ${PrimaryColor};
  text-align: center;
  line-height: 2.5rem;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  height: 40px;
  padding-left: 40px;
  width: 133px;
  background-color: white;
`;

const SubHeader = styled.div`
  margin: 65px 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  color: #a9a9a9;
`;

const AngleLeftButton = styled.button`
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  background-color: white;
  color: #a9a9a9;
  width: 133px;
  padding-right: 80px;
  border: none;

  /* margin-left: 10px;
  margin-right: 80px; */
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding: 50px 50px 50px 10px; */
  margin: 50px 0;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  padding: 20px 0px;
  font-weight: 700;
  flex-direction: column;
`;

const MaskCount = styled.div`
  font-weight: 900;
`;

const PointDown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #d3d3d3;
  width: 300px;
  height: 50px;
  margin-bottom: 20px;
  font-weight: 700;
  background-color: white;
  color: ${PrimaryColor};
`;

const PointInfo = styled.div`
  margin: 10px 0px 0px 0px;
  border-right: 1px solid #ccc;
  padding-right: 25px;
`;

const Edit = styled.button`
  border: none;
  color: white;
  text-align: center;
  line-height: 2.5rem;
  border-radius: 10px;
  font-weight: 900;
  font-size: 14px;
  width: 100px;
  height: 40px;
  margin: 10px 0px 0px 30px;
  background-color: ${PrimaryColor};
  border: 1px solid #ccc;
`;

const RecordContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  width: 350px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Record = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 350px;
  font-size: 12px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border: none;
  }
`;

const RecordDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  font-weight: 600;
  color: #a9a9a9;
`;

const RecordMaskLoc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 230px;
`;

const RecordMask = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
`;

const RecordLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const RecordPoint = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  font-weight: 900;
  color: ${PrimaryColor};
`;

const Color = styled.div`
  color: ${PrimaryColor};
`;

function MyPage({ homeToggled, storeToggled, myPageToggled }) {
  const navigate = useNavigate();
  const editHandler = () => {
    navigate("/edit");
  };

  const angleHandler = () => {
    navigate("/");
  };

  const [nickname, setNickname] = useState();
  const [point, setPoint] = useState();
  const [residence, setResidence] = useState();
  const [sumMask, setSumMask] = useState();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    let data = {
      "X-AUTH-TOKEN": window.localStorage.getItem("X-AUTH-TOKEN"),
    };
    MyRecords(data).then((res) => {
      console.log(res);
      setNickname(res.data.nickname);
      setPoint(res.data.point);
      setSumMask(res.data.maskCount);
      setResidence(res.data.residence);
      setRecords(res.data.activityRecord);
    });
  }, []);

  const logoutHandler = () => {
    let data = {
      "X-AUTH-TOKEN": window.localStorage.getItem("X-AUTH-TOKEN"),
    };
    Logout(data).then((res) => {
      console.log(res);
      if (res.status === 200) {
        window.localStorage.removeItem("X-AUTH-TOKEN");
        navigate("/login");
      }
    });
  };

  return (
    <div>
      <SubHeader>
        {" "}
        <AngleLeftButton onClick={angleHandler}>
          <FontAwesomeIcon
            icon={faAngleLeft}
            // style={{ paddingRight: "120px" }}
            size="2x"
          />
        </AngleLeftButton>
        <SubTitle>마이페이지</SubTitle>
        <LogoutContainer onClick={logoutHandler}>로그아웃</LogoutContainer>
      </SubHeader>
      <Container>
        <Point>
          <PointUp>
            <UserInfo>{nickname} 님,</UserInfo>
            <MaskCount>총 마스크 {sumMask}개를 폐기하셨어요! </MaskCount>
          </PointUp>
          <PointDown>
            <PointInfo>마스코인 {point} msk </PointInfo>
            <Edit onClick={editHandler}>정보 수정</Edit>
          </PointDown>
        </Point>
        <RecordContainer>
          {records.map((record, index) => (
            <Record key={index}>
              <RecordDate>{record.date}</RecordDate>
              <RecordMaskLoc>
                <RecordMask>마스크 {record.maskCount}개</RecordMask>
                <RecordLocation>{record.location}</RecordLocation>
              </RecordMaskLoc>
              <RecordPoint> +1 msk</RecordPoint>
            </Record>
          ))}
        </RecordContainer>
        <Navbar />
      </Container>
    </div>
  );
}

export default MyPage;
