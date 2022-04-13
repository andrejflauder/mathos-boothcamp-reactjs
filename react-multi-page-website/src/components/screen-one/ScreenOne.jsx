import React from 'react';

const ScreenOne = ({}) => {
  return (
    <main className="app--screen screen--one">
      <h2>Screen One</h2>

      <div style={{ display: 'flex', columnGap: '1rem' }}>
        <button type="button" data-modal="modal-one">
          Open Modal One
        </button>
      </div>
    </main>
  );
};

export default ScreenOne;
