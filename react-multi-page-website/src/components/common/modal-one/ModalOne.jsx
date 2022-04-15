import CarBrand from "./CarBrand";
import React, { Component } from "react";
import Modal from '../modal/Modal';





const ModalOne = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">
          <header className="modal--header">
            <h1>Modal One</h1>
          </header>
          <div className="modal--body">
            <p>Choose brand</p>

<CarBrand />



          </div>
          <footer className="modal--footer">
        <button type="button" data-modal="modal-two">
          Open Modal Two
        </button>
            <button type="button" onClick={closeFn}>
              Close
            </button>
          </footer>
        </div>
      </div>
    </Modal>
  );
};

export default ModalOne;
