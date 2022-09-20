import React from "react";
import ReactDOM from "react-dom";

const loremPicsum = "https://picsum.photos/200/300";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Flowers
    </h1>
    <div>
      <img alt="gray" src={loremPicsum + "?grayscale"} />
      <img alt="blur" src={loremPicsum + "?blur"} />
      <img alt="random" src={loremPicsum} />
    </div>
  </div>,
  document.getElementById("root")
);
