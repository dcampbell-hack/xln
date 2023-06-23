import React, { useState, useEffect } from "react";
import RecordMessage from "../../../../utils/record/RecordMessage";
import Form from "../../../form/form";
import axios from "axios";

const ChatBubble: React.FC = ({
  assistant,
  prompt,
  model,
  avatar,
  userId,
  content,
}) => {
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

const ViewChat: React.FC = ({
  options,
  assetId,
  ai,
  users,
  getChatMessages,
  setActionType,
}) => {
  const [values, setValues] = useState({});
  const [record, setRecord] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    console.log("View Chat -----", assetId, ai);
    getChatMessages(assetId);

    if (ai.chat && Object.keys(ai.chat).length !== 0) {
      const {
        model,
        max_tokens = parseInt(max_tokens),
        temperature = parseFloat(temperature),
        top_p = parseFloat(top_p),
        frequency_penalty = parseFloat(frequency_penalty),
        presence_penalty = parseFloat(presence_penalty),
      } = ai.chat;
      setValues({
        model,
        max_tokens,
        temperature,
        top_p,
        frequency_penalty,
        presence_penalty,
      });
    }
  }, [ai.chats.length]);


  const createBlobUrl = (data: any) => {
    const blob = new Blob([data], { type: "audio/mpeg" });
    const url = window.URL.createObjectURL(blob);
    return url;
  };

  const handleStop = async (blobUrl: string) => {
    setIsLoading(true);
    // Append recorded message to messages
    const myMessage = { sender: "me", blobUrl };
    const messagesArr = [...messages, myMessage];

    // Convert blob url to blob object
    fetch(blobUrl)
      .then((res) => res.blob())
      .then(async (blob) => {
        // Construct audio to send file'
        const formData = new FormData();
        formData.append("file", blob, "myFile.wav");

        // Send form data to API endpoint
        axios
          .post("http://localhost:8000/post-audio", formData, {
            headers: { "Content-Type": "audio/mpeg" },
            responseType: "arraybuffer",
          })
          .then((res: any) => {
            const blob = res.data;
            const audio = new Audio();
            audio.src = createBlobUrl(blob);

            // Append to audio
            const naomiMessage = { sender: "naomi", blobUrl: audio.src };
            messagesArr.push(naomiMessage);
            setMessages(messagesArr);

            // Play Audio
            setIsLoading(false);
            audio.play();
          })
          .catch((err) => {
            console.error(err.message);
            setIsLoading(false);
          });
        // setIsLoading(false)
      });
  };

  return (
    <div className="ai-chat-container">
      <div className="chat-input-container">
        <div className="chat-output">
          {ai.chats.map(({ id, assistant, prompt, model }) => (
            <ChatBubble
              key={id}
              assistant={assistant}
              prompt={prompt}
              model={model}
              avatar={users.cover}
              userId={users.id}
              content={options.content}
            />
          ))}
        </div>
        <div className="chat-input">
          <div className="chat-container">
            <RecordMessage handleStop={handleStop} />
            <Form formData={options} setValues={setValues} values={values} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewChat;
