import React, { Component } from "react";
import { observer } from "mobx-react";

import "./App.css";

import Store from "./Stores/numberStore";

class Component2 extends Component {
  state = {
    counter: 0
  };

  handleDecrement = () => {
    let newCounter = this.state.counter - 1;
    this.setState({ counter: newCounter });
  };

  render() {
    return (
      <div className="col-lg-6">
        <div className="component">
          <p>COMPONENT 2</p>
          <p>{Store.counter}</p>
          <button
            className="btn btn-lg btn-outline-dark"
            onClick={() => Store.decrementCounter()}
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default observer(Component2);
