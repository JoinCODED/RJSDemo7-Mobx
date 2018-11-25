import React from "react";
import { observer } from "mobx-react";
import "./App.css";

import counterStore from "./stores/counterStore";

import Component1 from "./Component1";
import Component2 from "./Component2";

function App() {
  return (
    <div className="App">
      <p>{counterStore.multiplyCounter2}</p>
      <div className="row">
        <Component1 />
        <Component2 />
      </div>
      <div className="row">
        <button
          className="btn btn-lg btn-block btn-outline-light"
          onClick={() => counterStore.multiplyCounter()}
        >
          Multiply by 5
        </button>
      </div>
    </div>
  );
}

export default observer(App);
