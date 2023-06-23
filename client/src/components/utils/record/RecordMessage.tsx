import React from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import RecorderIcon from "./RecordIcon";

interface Props {
  handleStop: any;
}

const RecordMessage = ({ handleStop }: Props) => {
  return (
    <ReactMediaRecorder
      audio
      onStop={handleStop}
      render={({ status, startRecording, stopRecording }) => (
        <div className="mt-2">
          <button
            onMouseDown={startRecording}
            onMouseUp={stopRecording}
            className={ status !== "recording" ? "voice-record " : "pressed"}
          >
            <RecorderIcon />
          </button>
          <small className="">{status}</small>
        </div>
      )}
    />
  );
};

export default RecordMessage;