import React, { Component } from "react";

class CarBrandSelected extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  onBrandValueChange(event) {
    this.setState({
      selectedBrandOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedBrandOption)
  }
  render() {
    return (
        <div>
          Selected brand: {this.state.selectedBrandOption}
        </div>
    );
  }
}

export default CarBrandSelected;