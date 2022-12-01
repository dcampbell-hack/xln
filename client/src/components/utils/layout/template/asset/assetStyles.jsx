import { useNavigate } from "react-router-dom";
import { useState, useEffect, useReducer, useCallback, useMemo } from "react";
import "../../../../../css/assets/Blog.scss";
import "../../../../../css/assets/AI.scss";

import Avatar from "../../../avatar";
import AssetImageItem from "../../../assets/index";
import BlogContentOutput from './blogOutput';
import BlogInput from './blogInput';
import BlogOutput from "./blogOutput";
import { FormTextArea } from '../form/formStyles';

import { PrimaryB, InfoB, WarningB, DangerB } from "../../../buttons/buttons";
import { LinkL, PrimaryL, InfoL } from "../../../buttons/links";

import TruncateText from "../../../text/truncate";
import FormatLayout from "../../index";
import Form from '../form/form'
import { title } from "process";


export const AIArt = ({ options, setActionType }) => {

const [ values, setValues ] = useState({})

  return(
    <div className="ai-art-container">
      <div className="ai-art-form">
        <h4>Enter Text Prompt</h4>
        <Form formData={options} setValues={setValues} values={values} />
      </div>
      
    </div>
  )
}

export const Blog = ({ options, setActionType }) => {

  const [plus, setPlus] = useState({});
  const [select, setSelect] = useState("header");
  const [icons, setIcons] = useState([]);
  const [featured, setFeatured] = useState({});
  const  [ content, setContent ] = useState([ { type: "header", content: "The first"}, { type: "paragraph", content: "The first paragraph that is amazing "}, { type: "header", content: "The second"}, { type: "image", content: "/uploads/aloy/asset/horizon_zero_dawn_1.jpeg"}, { type: "video", content:{ poster: "/uploads/xln/asset/images/johnson-ting-final-gif.jpg", video: "/uploads/xln/asset/videos/warehouse_robots.mp4"} }]);
  const [value, setValue] = useState({ });

  useEffect(() => {

    const { fields, buttons } = options;
    setFeatured(fields.find(({ type, index }) => type == select ));
    setPlus(buttons[0]);
    setIcons(buttons);
  }, [ featured ]);


  useEffect(() => {
      if( value.title ){
          console.log('Updated Values ---', content, select )
     }
  }, [ select ])

  const handleAddContent = () => {

    setContent(content => {
      return [ ...content, { type: value.type,  content: value.content }]
    })

  }

const attribute = {
  featured, select, value, setValue, content, setContent, action: handleAddContent
}

  return (
    <>

<div className="blog-display-entries">
   { content.map( ({ type, content }, index) => <BlogOutput key={index} type={type} content={content} /> ) }
</div>

<div className="blog-show-content"> 
  <BlogInput type={select} attribute={attribute} />
</div>

      <div className="blog-container">
        <div className="blog-panel">


          <div className="blog-asset">
            {icons.map(({ button, icon }, index) => (
              <div className="blog-icon" onClick={() => setSelect(button) }>
                <i class={icon}></i>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};


const UserForm = () => {

const [ state, dispatch ] = useReducer(
  ( state, action ) => ({
 ...state, 
 ...action
}), {
  first: "",
  last: ""
})

   return (
    <div>
      <div>
        First: {state.first} 
        Last: {state.last}
      </div>
      <input type="text" value={state.first} onChange={ e => dispatch({ first: e.target.value })} />
      <input type="text" value={state.last} onChange={ e => dispatch({ last: e.target.value })} />
    </div>
   )
}

export const Document = () => {

const [ state, dispatch ] = useReducer((state, action ) => {
  switch(action.type){
    case "SET_NAME": 
       return { ...state, name: action.payload }
    case "ADD_NAME":
      return { 
        ...state,
        names: [ ...state.name, state.name ],
        name: ""
      }
  }
}, {
  names: [],
  name: ""
})

 
  return (
    <div>
      <h2>Add Documents</h2>

      <UserForm />

  <p>{ state.name }</p>
<input
 type="text"
 value={ state.name }
 onChange={(e) => dispatch({ type: "SET_NAME" })}
/>

<button onClick={() => AddName()}>Add Name</button>

    </div>
  );
};

export const Domain = () => {
  return (
    <div className="domain-container">
      <h2>You Own the Following Domains</h2>
      <div className="domain-text-num-container" >
         <input type="text" placeholder="domain.eth"  disabled />
         <input type="number" placeholder="0.5 XLN" min="0" step=".01" />
         <button className="btn btn-outline">List ENS</button>
      </div>
    </div>
  );
};

export const Enterprise = () => {
  return (
    <div>
      <h2>Enterprise</h2>
    </div>
  );
};

export const Image = () => {
  return (
    <div>
      <h2>Add Image</h2>
    </div>
  );
};

export const Link = () => {
  return (
    <div>
      <h2>Add Link</h2>
    </div>
  );
};

export const Live = () => {
  return (
    <div>
      <h2>Add Live</h2>
    </div>
  );
};

export const Metaverse = () => {
  return (
    <div>
      <h2>Add Metaverse</h2>
    </div>
  );
};

export const Music = () => {
  return (
    <div>
      <h2>Add Music</h2>
    </div>
  );
};

export const RealEstate = () => {
  return (
    <div>
      <h2>Add RealEstate</h2>
    </div>
  );
};

export const Shop = () => {
  return (
    <div>
      <h2>Shop</h2>
    </div>
  );
};

export const Text = () => {
  return (
    <div>
      <h2>Text</h2>
    </div>
  );
};

export const Video = () => {
  return (
    <div>
      <h2>Video</h2>
    </div>
  );
};


export const Website = () => {
  return (
    <div>
      <h2>Website</h2>
    </div>
  );
};
