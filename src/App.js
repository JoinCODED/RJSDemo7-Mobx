import React from "react";
import { observer } from "mobx-react";
import "./App.css";

import counterStore from "./Stores/counterStore";

import Component1 from "./Component1";
import Component2 from "./Component2";

const App = () => {
  return (
    <div className="App">
      <p>{counterStore.double}</p>
      <div className="row">
        <Component1 />
        <Component2 />
      </div>
      <div className="row">
        <button
          className="btn btn-lg btn-block btn-outline-light"
          onClick={counterStore.multiplyCounterByFive}
        >
          Multiply by 5
        </button>
      </div>
    </div>
  );
};

export default observer(App);
