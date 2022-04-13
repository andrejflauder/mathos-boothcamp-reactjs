import React from 'react';
import { useForm } from "react-hook-form";
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


          <h2>Select your car brand</h2>

          <form action="/action_page.php">
            <p>Please select your favorite Web language:</p>
            <input type="radio" id="html" name="fav_language" value="HTML">
            <label for="html">HTML</label><br />  
            <input type="radio" id="css" name="fav_language" value="CSS">
            <label for="css">CSS</label><br />  
            <input type="radio" id="javascript" name="fav_language" value="JavaScript">
            <label for="javascript">JavaScript</label>

            <br />  

            <p>Please select your age:</p>
            <input type="radio" id="age1" name="age" value="30">
            <label for="age1">0 - 30</label><br />  
            <input type="radio" id="age2" name="age" value="60">
            <label for="age2">31 - 60</label><br />   
            <input type="radio" id="age3" name="age" value="100">
            <label for="age3">61 - 100</label><br />  
          </form>



          </div>
          <footer className="modal--footer">
          <button type="button" data-modal="modal-two">
          Next
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