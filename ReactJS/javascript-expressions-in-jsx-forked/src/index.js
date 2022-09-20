import React from "react";
import ReactDOM from "react-dom";

const fname = "Christina";
const lname = "Tian";
// const num = 7;

// template literal
ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}! or 你好 {`${lname} ${fname}`}
    </h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
