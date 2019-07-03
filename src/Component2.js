import React, { Component } from "react";
import { observer } from "mobx-react";

import "./App.css";

import counterStore from "./stores/counterStore";

function Component2() {
  return (
    <div className="col-lg-6">
      <div className="component">
        <p>COMPONENT 2</p>
        <p>{counterStore.counter}</p>
        <button
          className="btn btn-lg btn-outline-dark"
          onClick={() => counterStore.decrementCounter()}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default observer(Component2);
