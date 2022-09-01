import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetStoreInfo } from "../api/storeApi";
import { PrimaryColor } from "../utils/style";
import Navbar from "./Navbar";

const Container = styled.div`
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid: ". .";
  gap: 25px;
  width: 350px;
  /* height: 150px; */
  font-weight: 700;
`;

const TopText = styled.div`
  font-size: 14px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 20px;
`;

const GridItem = styled.div`
  width: 150px;
  /* height: 100px; */
  border-radius: 10px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemImage = styled.a`
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  resize: both;
  background-size: 150px 150px;
`;
const ItemName = styled.div`
  font-size: 14px;
  margin-bottom: 2px;
  color: ${PrimaryColor};
`;
const ItemAddress = styled.div`
  font-size: 10px;
  color: #a9a9a9;
`;
const ItemPhone = styled.div`
  font-size: 10px;
  color: #a9a9a9;
`;

function Store() {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    let data = {
      "X-AUTH-TOKEN": window.localStorage.getItem("X-AUTH-TOKEN"),
    };
    GetStoreInfo(data).then((res) => {
      console.log(res);
      setStores(res.data.store);
    });
  }, []);

  return (
    <Container>
      <TopText>인기있는 업사이클 스토어를 확인해보세요!</TopText>
      <GridContainer>
        {stores.map((store, index) => (
          <GridItem>
            <ItemImage
              href={store.siteUrl}
              style={{
                backgroundImage: `url(${store.imgUrl})`,
              }}
            ></ItemImage>
            <ItemName>{store.name}</ItemName>
            <ItemAddress>{store.address}</ItemAddress>
            <ItemPhone>{store.phoneNumber}</ItemPhone>
          </GridItem>
        ))}
      </GridContainer>
      <Navbar />
    </Container>
  );
}

export default Store;
