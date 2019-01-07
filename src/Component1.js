import React, { Component } from "react";
import "./App.css";

class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleIncrement() {
    let newNumber = this.state.counter + 1;
    this.setState({ counter: newNumber });
  }
  render() {
    return (
      <div className="col-lg-6">
        <div className="component">
          <p>COMPONENT 1</p>
          <p>{this.state.counter}</p>
          <button
            className="btn btn-lg btn-outline-dark"
            onClick={() => this.handleIncrement()}
          >
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default Component1;
