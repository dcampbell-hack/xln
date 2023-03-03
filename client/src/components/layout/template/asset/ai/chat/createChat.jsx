import React, { useState } from 'react'
import Form from '../../../form/form'


const CreateChat = ({ options, setActionType }) => {

  const [ values, setValues ] = useState({})
  
    return (
      <div className="ai-chat-container">
        <div className="chat-sidebar">
            <button>+ New Chat</button>
        </div>
        <div className="chat-input-container">
            <div className="chat-output">
              <div className="chat-party-user"><p>Hell There, I am here to kick ass and have fun</p></div>
              <div className="chat-party-cpu"><p>Do you mean like a Berserker Muppet?</p></div>
            </div>
            <div className="chat-input">
               <Form formData={options} setValues={setValues} values={values} />
            </div>
        </div>
      </div>
    );
  };

  export default CreateChat