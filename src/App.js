import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
import Header from "./components/Header.js";
import Body from "./components/Body.js";


const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
