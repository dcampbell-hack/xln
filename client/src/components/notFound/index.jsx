import React from 'react';
import NotFound3D from '../XR/scene/notFound';

const NotFound = ({ type="Page", message="Not Found" }) => {
  return (
    <div className="not-found-container">
      <div className='not-found'>
      <i className="fas fa-ban"></i>
      <h2>{type} {message}</h2>
      </div>
    </div>
  )
}

export default NotFound;