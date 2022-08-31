import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";

function QrScanPage() {
  const [scanResultFile, setScanResultFile] = useState();
  const navigate = useNavigate();
  return (
    <div>
      QrScanPage
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setScanResultFile(result?.text);
            navigate("/qrForm", {
              state: { maskSerialNumber: scanResultFile },
            });
          }

          if (!!error) {
            console.info(error);
          }
        }}
      />
      {scanResultFile}
    </div>
  );
}

export default QrScanPage;
