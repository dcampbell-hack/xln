import React, { useEffect, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';

const videoContraints = {

}

const Camera = () => {
    const webcamRef = useRef(null);

    const [ url, setUrl ] = useState(null);

    const capturePhoto = useCallback( async () => {
        const imageSrc = webcamRef.current.getScreenshot()

        setUrl(imageSrc);
    }, [ webcamRef ])

    const onUseredia = (e) => {
        console.log(e)
    }

    return (
        <div>
             <Webcam
                ref={webcamRef}
                audio={true}
                screenshotFormat="image/png"
                onUserMedia={onUseredia}
                mirrored={true}
             />
             <button onClick={capturePhoto}>Capture</button>
             <button onClick={() => setUrl(null)}>Refresh</button>

             { url && (
                <div>
                    <img src={url} alt="src" />
                </div>
             )}
        </div>
    )
}