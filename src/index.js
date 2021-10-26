import React from "react";
import ReactDOM from "react-dom";

export default function Greeting() {
  return <h4> this is Sasun and this is my first component</h4>;
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
