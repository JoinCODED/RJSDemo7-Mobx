import React, { Component } from "react";
import { observer } from "mobx-react";

import "./App.css";

import Store from "./Stores/numberStore";

class Component1 extends Component {
  state = {
    counter: 0
  };

  handleIncrement = () => {
    let newNumber = this.state.counter + 1;
    this.setState({ counter: newNumber });
  };

  render() {
    return (
      <div className="col-lg-6">
        <div className="component">
          <p>COMPONENT 1</p>
          <p>{Store.counter}</p>
          <button
            className="btn btn-lg btn-outline-dark"
            onClick={() => Store.incrementCounter()}
          >
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default observer(Component1);
