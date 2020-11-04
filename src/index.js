import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

// change vh if the address bar is in view
const vhCacl = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

vhCacl();
window.addEventListener("resize", () => {
  vhCacl();
});

ReactDOM.render(<App />, document.getElementById("root"));
