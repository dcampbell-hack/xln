import React from 'react'
import { createPortal } from 'react-dom';
const modal = document.getElementById('modal');

const Modal = ({ action, bool, children }) => {

console.log('Modal ----',  action, bool, children)

return createPortal( <div className="modal-overlay">
    <div className="modal-header">
        <div className="modal-close-btn" onClick={() => action(!bool)}>
        <i className="fa-solid fa-xmark"></i>
        </div>
        </div>
        <div className="modal-content">
     {children}
    </div>
    </div>, modal);
}

export default Modal;
