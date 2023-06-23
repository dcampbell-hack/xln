import React, { useState, useEffect } from 'react'
import { FormInput, FormTextArea, FileUpload } from '../../form/formStyles'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const HeaderBlog: React.FC = ({ attribute: { featured, select, value, setValue  } }) => {

    const attributes = {
        label: {
          error: false,
          inverse: false,
          show: false,
          labelText: "Text",
          forId: "content",
        },
        input: {
          type: "text",
          id: "content",
          className: "header_blog",
          name: "content",
          value: {},
          onChange: "",
          placeholder: "Enter Text",
        },
        aria: {},
      }


    useEffect(() => {
       value.type = select
    }, [])

    return(
        <div className='blog-input-header'>
             <FormInput  options={ attributes } values={value} setValues={setValue} /> 
        </div>
    )
}

const TextBody: React.FC = ({ attribute: { value, setValue }}) => {

const [ text, setText ] = useState('');

useEffect(() => {
  setValue({ type: 'paragraph', content: text })
}, [ text ])

    return(
        <div className='blog-text-area'>
               <ReactQuill theme="snow" value={text} onChange={setText}/>
         {/* <FormTextArea options={attributes} />  */}
        </div>
    )
}

const Image: React.FC = () => {
    return(
        <div>Image</div>
    )
}

const Video: React.FC = () => {
    return(
        <div>Video</div>
    )
}

const Music: React.FC = () => {
    return(
        <div>Music</div>
    )
}

const Link: React.FC = () => {
    return(
        <div>Link</div>
    )
}

const Camera: React.FC = () => {
    return(
        <div>Camera</div>
    )
}

const Search: React.FC = () => {
    return(
        <div>Search</div>
    )
}

const CreateBlog: React.FC = ({ type, attribute, action }) => {

  return (
    <div className='blog-input-container'>
      {
        {
            'header': <HeaderBlog attribute={attribute} />,
            'body': <TextBody attribute={attribute} />,
            'image': <Image />,
            'video': <Video />,
            'music': <Music />,
            'link': <Link />,
            'camera': <Camera />,
            'search': <Search />,

        }[type]
      }
      <div className='blog-checkbox'>
        <button className='blog-checkbox-btn' onClick={() => attribute.action() } >      
            <i className="fa-solid fa-square-check"></i>
        </button>

      </div>
    </div>
  )
}

export default CreateBlog;
