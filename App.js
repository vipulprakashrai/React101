import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement(Object) => HTMLElement(on render)
const heading = React.createElement("h1",{id: "heading"},"Learning React")
console.log(heading)//Object

// JSX-(HTML like or XML like Syntax)
// jsx -> transpiled before it reaches the js engine -> done by babel  -> PARCEL

//JSX =>Babel transpiles it to React.createElement => ReactElement(Object) => HTMLElement(on render)
const jsxHeading = (
    <h1 className="heading" tabIndex={1}>
     React using JSX
    </h1>
  )
console.log(jsxHeading);


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
root.render(jsxHeading)