import React, { useState, useEffect } from "react";
import Form from "../../../form/form";

const ChatBubble = ({ assistant, prompt, model, avatar, userId, content }) => {

  return (
    <>
      <div className="chat-party user">
        <div className="chat-avatar">
          <img
            src={`/uploads/${userId}/avatar/${avatar}`}
            width={"50px"}
            height={"auto"}
          />
        </div>
        <div className="chat-blob sender">
          <p>{prompt}</p>
        </div>
      </div>

      <div className="chat-party cpu">
        <div className={`chat-blob ${model}`}>
          <p>{assistant}</p>
        </div>
        <div className="chat-avatar">
          <img src={content[model]} width={"50px"} height={"auto"} />
        </div>
      </div>
    </>
  );
};

const ViewChat = ({
  options,
  assetId,
  ai,
  users,
  getChatMessages,
  setActionType,
}) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    console.log("View Chat -----", assetId, ai);
    getChatMessages(assetId);

    if(ai.chat && Object.keys(ai.chat).length !== 0){

      const { model, max_tokens = parseInt(max_tokens), temperature = parseFloat(temperature), top_p = parseFloat(top_p), frequency_penalty = parseFloat(frequency_penalty) , presence_penalty = parseFloat(presence_penalty) } = ai.chat;
      setValues({ model, max_tokens, temperature, top_p, frequency_penalty, presence_penalty })
    }
    
  }, [ ai.chats.length ]);


  return (
    <div className="ai-chat-container">
      <div className="chat-input-container">
        <div className="chat-output">

         { ai.chats.map(({id, assistant, prompt, model }) => <ChatBubble key={id} assistant={assistant} prompt={prompt} model={model} avatar={users.cover} userId={users.id} content={options.content} />)}
   
        </div>
        <div className="chat-input">
          <Form formData={options} setValues={setValues} values={values} />
        </div>
      </div>
    </div>
  );
};

export default ViewChat;
