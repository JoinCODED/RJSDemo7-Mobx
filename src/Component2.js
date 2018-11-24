import React, { Component } from "react";
import "./App.css";

class Component2 extends Component {
  render() {
    return (
      <div className="col-lg-6">
        <div className="component">
          <p>COMPONENT 2</p>
          <p>{this.props.counter}</p>
          <button
            className="btn btn-lg btn-outline-dark"
            onClick={() => this.props.handleDecrement()}
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Component2;
