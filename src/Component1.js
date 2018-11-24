import React, { Component } from "react";
import "./App.css";

class Component1 extends Component {
  render() {
    return (
      <div className="col-lg-6">
        <div className="component">
          <p>COMPONENT 1</p>
          <p>{this.props.counter}</p>
          <button
            className="btn btn-lg btn-outline-dark"
            onClick={() => this.props.handleIncrement()}
          >
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default Component1;
