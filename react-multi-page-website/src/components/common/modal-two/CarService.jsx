import React, { Component } from "react";
import CarBrand from "../modal-one/CarBrand";
import ModalOne from "../modal-one/ModalOne";

class CarService extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }

 onChangeValue(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
        <br />
        <h1>My {this.state.brand}</h1>
      
      </div>

    );
  }
}

export default CarService;