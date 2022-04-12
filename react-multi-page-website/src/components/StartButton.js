import React from 'react';  
import '../App.css';  
import { Button,Modal} from 'react-bootstrap';
import ReactDOM from "react-dom";
import ReactModal from "react-modal";
import { ModalProvider, ModalContext, ModalRoot } from 'react-multi-modal';



class StartButton extends React.Component {  
  constructor(){  
    super();  
    this.state={  
      show:false  
    }  
  }  
  handleModal(){  
    this.setState({show:!this.state.show})  
  }  
  render(){  
    return (  
      <div>  
        <div className="modalClass">  
          <Button onClick={()=>this.handleModal()}>Start</Button>  
        </div>  
          
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>  
          <Modal.Header closeButton>Service configurator</Modal.Header>  
          <Modal.Body>

          <h2>Select your car brand</h2>

          <form action="/action_page.php"></form>
          <input type="radio" id="volvo" name="car_brand" value="Volvo"></input>
          <label for="volvo">Volvo</label>
          <br />

          <input type="radio" id="jeep" name="car_brand" value="Jeep"></input>
          <label for="jeep">Jeep</label>
          <br />

          <input type="radio" id="toyota" name="car_brand" value="Toyota"></input>
          <label for="toyota">Toyota</label>
          

          </Modal.Body>  
          <Modal.Footer>  
            <Button onClick={()=>this.handleModal()}>Close</Button>  
            <Button onClick={()=>this.handleModal2()}>Next</Button>  


                  <Modal show={this.state.show} onHide={()=>this.handleModal2()}>  
                    <Modal.Header closeButton>Service configurator</Modal.Header>  
                    <Modal.Body>

                    <h2>Select service</h2>
                    

                    </Modal.Body>  
                    <Modal.Footer>  
                      <Button onClick={()=>this.handleModal2()}>Close</Button>  
                      <Button onClick={()=>this.handleModal3()}>Next</Button>  
                    </Modal.Footer>  
                  </Modal>  



          </Modal.Footer>  
        </Modal>  

           
        

      </div>  
    )  
  }  
}  

export default StartButton


