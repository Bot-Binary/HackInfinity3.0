import React, { useState } from 'react'
import QrReader from 'react-qr-reader';
import image from './testQr.png';

export default function Qrscanner() {

  const [scanResultFile, setScanResultFile] = useState('');
  const [scanResultWebCam, setScanResultWebCam] = useState('');

  const handleErrorFile = (error) => {
    console.log(error);
  }

  const handleScanFile = (result) => {
    if (result) {
      setScanResultFile(result);
    }
  }
  return (
    <div>
      this is qr scanner path.
      <QrReader
        ref={image}
        delay={300}
        style={{ width: '100%' }}
        onError={handleErrorFile}
        onScan={handleScanFile}
        legacyMode
      />
    </div>
  )
}
