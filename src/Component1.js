import React, { Component } from "react";
import "./App.css";

const Component1 = props => {
  return (
    <div className="col-lg-6">
      <div className="component">
        <p>COMPONENT 1</p>
        <p>{props.counter}</p>
        <button
          className="btn btn-lg btn-outline-dark"
          onClick={() => props.handleIncrement()}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Component1;
