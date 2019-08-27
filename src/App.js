import React, { Component } from "react";
import "./App.css";

import Component1 from "./Component1";
import Component2 from "./Component2";

class App extends Component {
  state = {
    counter: 0
  };

  handleIncrement = () => {
    let newCounter = this.state.counter + 1;
    this.setState({ counter: newCounter });
  };

  handleDecrement = () => {
    let newCounter = this.state.counter - 1;
    this.setState({ counter: newCounter });
  };
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
      </div>
    );
  }
}

export default App;
