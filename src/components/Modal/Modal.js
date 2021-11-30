import React from "react";
import "./Modal.scss";

const Modal = (props) => {
  return (
    <div
      className="outerStyle"
      style={{
        display: props.isModalOpen ? "block" : "none",
      }}
    >
      <div className="overlay" onClick={props.closeModal} />
      <div onClick={props.closeModal} />
      <div className="modal">{props.children}</div>
    </div>
  );
};

export default Modal;
