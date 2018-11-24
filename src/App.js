import React, { Component } from "react";
import "./App.css";

import Component1 from "./Component1";
import Component2 from "./Component2";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    let newCounter = this.state.counter + 1;
    this.setState({ counter: newCounter });
    console.log(this.state.counter);
  }

  handleDecrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <Component1
            counter={this.state.counter}
            handleIncrement={this.handleIncrement}
          />
          <Component2
            counter={this.state.counter}
            handleDecrement={this.handleDecrement}
          />
        </div>
        <div className="row">
          <button
            className="btn btn-lg btn-block btn-outline-light"
            onClick={() => this.handleIncrement()}
          >
            Increment
          </button>
          <button
            className="btn btn-lg btn-block btn-outline-light"
            onClick={() => this.handleDecrement()}
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default App;
