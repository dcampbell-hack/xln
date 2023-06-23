import React from 'react'

export const ErrorAlert: React.FC = ({ error, action }) => {
   return(
    <div className="form-alert form-alert-error">
    <div className="error-text">
    <li className="error-alert">
           {error}
       </li>
    </div>
    <div className="dismiss" onClick={() => action([])}>
      <i className="fas fa-times-square"></i>
    </div>
  </div>

   )
}