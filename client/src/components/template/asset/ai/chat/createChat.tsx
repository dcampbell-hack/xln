import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { PrimaryB, InfoB  } from "../../../../utils/buttons/buttons";
import Form from "../../../form/form";
import Modal from "../../../../layout/modal";

const CreateChat: React.FC = ({ options, assets, users }) => {
  const [ chat, setChat ] = useState([])
  const [values, setValues] = useState({});
  const [modal, setModal ] = useState(false)



  useEffect(() => {

    const array = assets.assets.filter(({ user, assetType }) => user == users.id && assetType == "AI Chat"  )
    setChat([ ...array ])

  }, [])



  return (
    <div className="chat-options">
      <div className="chat-header" style={{ backgroundImage: `url(${options.content.image })`}}>
        <div className="translucent-filter">
        <div className="chat-content">        
          <h2>{options.content.header}</h2>
          <p>{ options.content.description }</p>
          <div className="chat-content-buttons">
           <PrimaryB  text={"Create Chat"} icon={"far fa-comment-alt-smile"} click={() => setModal(!modal)} /> 
           <InfoB  text={"Execute Agent"} icon={"far fa-comment-alt-smile"} click={() => setModal(!modal)} /> 
           </div>
        </div>
        </div>
      </div>
      <div className="chat-list-wrapper">
         { chat.map(({ id, cover, description }) => <Link to={`/xln/view/asset/${id}/ai/chat/`}><div className="chat-list-item">
            <div className="chat-text">
              <h4>{description}</h4>
              </div>
            <img src={`/src/system/image/cover/${cover}`} width={'100%'} height={"auto"} />
          </div></Link>) 
         }
        </div>
       { modal && <Modal action={setModal} bool={modal}>
        <h2>{options.content.header2}</h2>
       <div className="chat-card-wrapper" >
        <Form formData={options} setValues={setValues} values={values} />
      </div>
        </Modal> }
    </div>
  );
};

export default CreateChat;
