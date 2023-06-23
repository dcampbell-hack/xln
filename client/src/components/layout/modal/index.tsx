import React from 'react'
import { createPortal } from 'react-dom';
const modal = document.getElementById('modal');

const Modal: React.FC = ({ action, bool, children }) => {

return createPortal( <div className="modal-overlay">
    <div className="modal-header">
        <div className="modal-close-btn" onClick={(bool) => action(!bool)}>
        <i className="fa-solid fa-xmark"></i>
        </div>
        </div>
        <div className="modal-content">
     {children}
    </div>
    </div>, modal);
}

export default Modal;
