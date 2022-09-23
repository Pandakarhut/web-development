import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, powerOfPi } from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{powerOfPi()}</li>
  </ul>,
  document.getElementById("root")
);
