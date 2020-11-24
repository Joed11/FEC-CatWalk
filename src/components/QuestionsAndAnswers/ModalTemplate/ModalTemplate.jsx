import React from "react";
import ReactDOM from "react-dom";
import '../../../../dist/stylesheets/QandAstyles.css';

var ModalTemplate = ({ open, children, onClose }) => {
  if (open === false) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay" id="modal-root">
      <div className="modal">
        <a className="modal-close" onClick={onClose}>X</a>
        {children}
      </div>
    </div>,
    document.getElementById('active-modal')
  );
};

ModalTemplate.propTypes = {};

export default ModalTemplate;