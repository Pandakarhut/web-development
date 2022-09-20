import React from "react";
import ReactDOM from "react-dom";

// {key: value}

const customStyle = {
  color: "pink",
  fontSize: "20px",
  border: "1px solid black"
};

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
