import QRCode from 'qrcode';
import { useEffect, useState } from 'react';

const QRCodeGenerator = ({ text }) => {

const [src, setSrc ] = useState('');

useEffect(() => {
    const renderQRCode = async () => {
    const render = await QRCode.toDataURL(text);
    setSrc(render);
    }

    renderQRCode();
}, [])


    return(
        <div className="qr-code-container">
          <img src={src} width="100%" height="100%" />
        </div>
    )
}


export default QRCodeGenerator;