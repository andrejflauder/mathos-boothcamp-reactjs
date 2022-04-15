import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Route, Switch } from 'react-router-dom';
import ModalManager from './ModalManager';


const AppShell = () => {
  const [modalOpen, setState] = useState(false);

  const openModal = event => {
    event.preventDefault();
    const {
      target: {
        dataset: { modal }
      }
    } = event;
    if (modal) setState(modal);
  };

  const closeModal = () => {
    setState('');
  };






  return (
    <BrowserRouter>
      <div id="test" onClick={openModal}>
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