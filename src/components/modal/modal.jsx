import React from "react";
import  ReactDOM  from "react-dom";
import "./modal.scss";

function Modal({ children }) {
return ReactDOM.createPortal (
    <div className="modal">
        {children}
    </div>,
    document.getElementById('modal')
);
}

export { Modal };