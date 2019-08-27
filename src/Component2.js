import React, { Component } from "react";
import "./App.css";

const Component2 = props => {
  return (
    <div className="col-lg-6">
      <div className="component">
        <p>COMPONENT 2</p>
        <p>{props.counter}</p>
        <button
          className="btn btn-lg btn-outline-dark"
          onClick={() => props.handleDecrement()}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Component2;
