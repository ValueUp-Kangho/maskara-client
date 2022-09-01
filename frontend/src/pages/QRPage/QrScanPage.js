import React, { useEffect, useRef, useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import adapter from "webrtc-adapter";

const TextContainer = styled.div`
  font-weight: 900;
  width: 375px;
  text-align: center;
  /* height: 200px; */
  line-height: 0;
  margin: 0px;
`;

function QrScanPage() {
  const [scanResultFile, setScanResultFile] = useState();
  const navigate = useNavigate();
  adapter.browserDetails.browser;
  adapter.browserDetails.version;
  return (
    <div
      style={{
        width: "375px",
        margin: "60px auto 0 auto",
        lineHeight: "600px",
      }}
    >
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setScanResultFile(result?.text);
            window.location.reload(false);
            navigate("/qrForm", {
              state: { collectionBoxSerialNumber: result?.text },
            });
          }
        }}
        videoStyle={{ width: "375px", margin: "0 auto", lineHeight: "400px" }}
      />
      <TextContainer>QR 코드를 위치시켜주세요!</TextContainer>
    </div>
  );
}

export default QrScanPage;
