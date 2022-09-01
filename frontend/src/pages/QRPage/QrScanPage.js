import React, { useEffect, useRef, useState } from "react";
import { QrReader } from "react-qr-reader";
import { Html5Qrcode } from "html5-qrcode";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import adapter from "webrtc-adapter";

let html5Qrcode;

const config = { fps: 20, qrbox: { width: 300, height: 300 } };

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div`
  display: flex;
  font-weight: 900;
  font-size: 18px;
`;

function QrScanPage() {
  const navigate = useNavigate();

  useEffect(() => {
    html5Qrcode = new Html5Qrcode("reader");
    html5Qrcode.start(
      { facingMode: "environment" },
      config,
      qrCodeSuccessCallback
    );
  }, []);

  const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    navigate("/qrForm", {
      state: { collectionBoxSerialNumber: decodedResult.decodedText },
    });
    handleStop();
  };

  const handleStop = () => {
    try {
      html5Qrcode
        .stop()
        .then((res) => {
          html5Qrcode.clear();
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Container>
        <div
          id="reader"
          style={{
            marginTop: "50px",
            width: "375px",
            lineHeight: "0",
            height: "600px",
          }}
        ></div>
        <Text>QR코드를 스캔해주세요!</Text>
      </Container>
    </div>
  );
}

export default QrScanPage;
