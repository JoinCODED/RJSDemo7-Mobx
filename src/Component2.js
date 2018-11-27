import React, { Component } from "react";
import "./App.css";

class Component2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.decrementCounter = this.decrementCounter.bind(this);
  }
  decrementCounter() {
    this.setState({ counter: this.state.counter - 1 });
  }
  render() {
    return (
      <div className="col-lg-6">
        <div className="component">
          <p>COMPONENT 2</p>
          <p>{this.state.counter}</p>
          <button
            className="btn btn-lg btn-outline-dark"
            onClick={() => this.decrementCounter()}
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Component2;
