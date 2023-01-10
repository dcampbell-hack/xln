import React, { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';


const AllCameras = () => {

const [ devices, setDevices ] = useState([])

const handleDevices = useCallback((mediaDevices) => { 
    setDevices(mediaDevices.filter(({ kind }) => kind === 'videoinput' )),[setDevices]
})

useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then( handleDevices )
}, [ handleDevices ])

  return(
    <div className="video-devices">
        {
            devices.map((device, key ) => (
                <Webcam 
                  audio={ false }
                  videoConstraints={{ deviceId: device.deviceId }}
                />
            ))
        }
    </div>
  )
}

export default AllCameras;