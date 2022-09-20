//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const currentHour = new Date().getHours();
let timeOfDayColor;
let timeOfDayMessage;

if (currentHour < 12 && currentHour >= 0) {
  timeOfDayColor = "red";
  timeOfDayMessage = "Good morning";
} else if (currentHour >= 12 && currentHour < 18) {
  timeOfDayColor = "green";
  timeOfDayMessage = "Good afternoon";
} else {
  timeOfDayColor = "blue";
  timeOfDayMessage = "Good night";
}

ReactDOM.render(
  <h1 className="heading" style={{ backgroundColor: timeOfDayColor }}>
    {timeOfDayMessage}
  </h1>,
  document.getElementById("root")
);
