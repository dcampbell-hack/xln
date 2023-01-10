import React, { useState } from 'react'

import { FormInput, FormTextArea, FileUpload } from '../../form/formStyles'


const Heading = ({ content }) => {
    return(
        <div>
            <h1>{content}</h1>
        </div>
    )
}

const TextBlob = ({ content }) => {

    return(
        <div dangerouslySetInnerHTML={{__html: content }} />
    )
}

const Image = ({ content }) => {
    return(
        <div>
            <img src={content}  />
        </div>
    )
}

const Video = ({ content: { video, poster } }) => {
    return(
        <div>
        <video width="100%" height="auto" controls poster={poster}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3>This is the title of this video</h3>
      </div>
    )
}

const Music = ({ content }) => {
    return(
        <audio controls>
        <source src="horse.ogg" type="audio/ogg" />
        Your browser does not support the audio tag.
      </audio>
    )
}

const Link = ({ content }) => {
    return(
        <div>
            <a href="#">Link</a></div>
    )
}

const Camera = ({ content }) => {
    return(
        <div>Camera</div>
    )
}

const Search = ({ content }) => {
    return(
        <div>Search</div>
    )
}

const BlogOutput = ({ type, content }) => {

  return (
    <div>
      {
        {
            'header': <Heading content={content} />,
            'paragraph': <TextBlob content={content}  />,
            'image': <Image content={content}  />,
            'video': <Video content={content}  />,
            'music': <Music content={content}  />,
            'link': <Link content={content}  />,
            'camera': <Camera content={content}  />,
            'search': <Search content={content}  />,

        }[type]
      }
    </div>
  )
}

export default BlogOutput;