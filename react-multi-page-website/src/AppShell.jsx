import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Route, Switch } from 'react-router-dom';
import ModalManager from './ModalManager';

import './app-shell.css';

const AppShell = () => {
  const [modalOpen, setModal] = useState(false);

  const openModal = event => {
    event.preventDefault();
    const {
      target: {
        dataset: { modal }
      }
    } = event;
    if (modal) setModal(modal);
  };

  const closeModal = () => {
    setModal('');
  };

  return (
    <BrowserRouter>
      <div className="app--shell" onClick={openModal}>
      <Switch>
      <Route exact path="/">
      <div style={{ display: 'flex', columnGap: '1rem' }}>
        <button type="button" data-modal="modal-one">
          Open Modal One
        </button>
      </div>
      </Route>
    </Switch>
        <ModalManager closeFn={closeModal} modal={modalOpen} />
      </div>
    </BrowserRouter>
  );
};

export default AppShell;