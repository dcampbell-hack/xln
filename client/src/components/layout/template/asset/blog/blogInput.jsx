import React, { useState, useEffect } from 'react'
import { FormInput, FormTextArea, FileUpload } from '../../form/formStyles'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Header = ({ attribute: { featured, select, value, setValue  } }) => {

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

const TextBody = ({ attribute: { value, setValue }}) => {

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

const Image = () => {
    return(
        <div>Image</div>
    )
}

const Video = () => {
    return(
        <div>Video</div>
    )
}

const Music = () => {
    return(
        <div>Music</div>
    )
}

const Link = () => {
    return(
        <div>Link</div>
    )
}

const Camera = () => {
    return(
        <div>Camera</div>
    )
}

const Search = () => {
    return(
        <div>Search</div>
    )
}

const BlogInput = ({ type, attribute, action }) => {

  return (
    <div className='blog-input-container'>
      {
        {
            'header': <Header attribute={attribute} />,
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

export default BlogInput;
