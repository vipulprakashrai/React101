import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "/index.css"
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import Cart from "./components/Cart.js";
import { Provider } from "react-redux";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
import appStore from "./utils/appStore.js";
//import Grocery from "./components/Grocery.js";

//chunking
// code splitting
//Dynamic Bundling
//Lazy loading

const Grocery = lazy(() => import("./components/Grocery.js"));

const App = () => {
  return (
    <Provider store={appStore}>
      <>
        <Header />
        <Outlet/>
     </>
     </Provider>
  );
};

const route = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>,
    
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h2>loading grocery data...</h2>}><Grocery/></Suspense>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/restaurant/:resId",
        element:<RestaurantMenu/>,
      }
    ]
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={route}/>);
