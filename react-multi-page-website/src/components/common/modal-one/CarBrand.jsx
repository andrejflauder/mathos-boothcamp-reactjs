import React, { Component } from "react";

class CarBrand extends Component {
 constructor() {
    super();
    this.state = {
      name: "React",
      brand: ""
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    console.log(event.target.value);
  }

  brandCar = () => {
    this.setState({brand: "car"});
  }

  render() {
    return (
      <div onChange={this.onChangeValue}>
        <input type="radio" value="Car" onClick={this.brandCar} checked={this.state.selectedOption === "Car"} name="vehicle" /> Car
        <input type="radio" value="Truck" checked={this.state.selectedOption === "Truck"} name="vehicle" /> Truck
        <input type="radio" value="Tractor" checked={this.state.selectedOption === "Tractor"} name="vehicle" /> Tractor
        <br />
        <h1>My {this.state.brand}</h1>
      </div>
    );
  }
}

export default CarBrand;