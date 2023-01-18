import { useState } from 'react';
import QRcode from 'react-qr-code';
import QRcodeLink from 'qrcode';
import './App.css';

function App() {

  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(link_url){
    QRcodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function (err, url){
      setQrcodeLink(url);
    })
  }
  

  function handleQrcode(e){
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <div className="container">

      <QRcode
        value={link}
      />

      <input 
        className="input"
        placeholder="Digite seu link..."
        value={link}
        onChange={ (e) => handleQrcode(e)}
      />

      <a href={qrcodeLink} download={`qrcode.png`}>Download QRCode</a>

    </div>
  );
}

export default App;
