import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const route = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>
  },
  {
    path: "/about",
    element: <About/>,

  },
  {
    path: "/contact",
    element: <Contact/>,
  },
 
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={route}/>);
