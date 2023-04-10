import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Form from "../../../form/form";

const UseChat = ({ options: { content: { header, description, listChatOptions } }, setActionType }) => {
  const [values, setValues] = useState({});
  console.log("Options --------", header, description, listChatOptions )

  return (
    <div className="chat-options">
      <div className="chat-header">
        <h2>{header}</h2>
        <p>{ description }</p>
      </div>
       <div className="chat-card-wrapper" >
       { listChatOptions.map(({ type, image, title, description, url }) => <div className="chat-card">
          <div className="chat-card-image">
            <img src={image} width="100%" height="auto" />
          </div>
          <div className="chat-card-text">
            <h4>{title}</h4>
            <p>{description.slice(0, 180)}</p>
            <Link to={url}>Start Chat</Link>
          </div>
        </div>)}

      </div>

    </div>
  );
};

export default UseChat;
