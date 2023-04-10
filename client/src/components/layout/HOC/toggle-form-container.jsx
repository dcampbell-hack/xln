import { useState } from 'react'

export const ToggleFormContainer = (props) => {

    const [open, setOpen ] = useState(false)

    return (
      <div className="toggle-form-container">
        <div className="toggle-header">
              <p>{props.header}</p>
              <div onClick={() => setOpen(!open)}><i className={open ? 'fa fa-minus' : 'fa fa-plus' }></i></div>
        </div>
        <div className="toggle-content">
          {open ? props.children : <small>{props.description}</small> } 
        </div>
      </div>
    );
  };
  