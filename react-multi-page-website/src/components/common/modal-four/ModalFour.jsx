import React from 'react';

import Modal from '../modal/Modal';

const ModalFour = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">
          <header className="modal--header">
            <h1>Modal Four</h1>
          </header>
          <div className="modal--body">
            <p>Modal Four content will be rendered here.</p>
          </div>
          <footer className="modal--footer">
        <button type="button" data-modal="modal-five">
          Open Modal Five
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

export default ModalFour;
