import React, { useEffect, useRef, useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";

function QrScanPage() {
  const [scanResultFile, setScanResultFile] = useState();
  // const ref = useRef(null);
  const navigate = useNavigate();

  // const closeCam = async () => {
  //   const stream = await navigator.mediaDevices.getUserMedia({
  //     audio: false,
  //     video: true,
  //   });
  //   stream.getTracks().forEach(function (track) {
  //     track.stop();
  //     track.enabled = false;
  //   });
  //   ref.current.stopCamera();
  // };
  return (
    <div>
      QrScanPage
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setScanResultFile(result?.text);
            window.location.reload(false);
            navigate("/qrForm", {
              state: { collectionBoxSerialNumber: result?.text },
            });
          }

          // if (!!error) {
          //   console.info(error);
          // }
        }}
      />
      {scanResultFile}
    </div>
  );
}

export default QrScanPage;
