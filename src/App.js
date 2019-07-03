import React from "react";
import "./App.css";

import Component1 from "./Component1";
import Component2 from "./Component2";

function App() {
  return (
    <div className="App">
      <div className="row">
        <Component1 />
        <Component2 />
      </div>
    </div>
  );
}

export default App;
