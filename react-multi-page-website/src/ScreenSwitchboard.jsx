import React from 'react';
import { Route, Switch } from 'react-router-dom';


const ScreenSwitchboard = () => {
  return (
    <Switch>
      <Route exact path="/">
      <div style={{ display: 'flex', columnGap: '1rem' }}>
        <button type="button" data-modal="modal-one">
          Open Modal One
        </button>
      </div>
      </Route>
    </Switch>
  );
};

export default ScreenSwitchboard;
