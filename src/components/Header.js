import {LOGO_URL} from "../utils/constants.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../utils/cartSlice.js";

const Header = () => {

const [loginbtn, setloginbtn] = useState("Login");

const cartItems = useSelector(selectCart);
console.log(cartItems);
    return(
      <div className="flex justify-between items-center shadow-md mb-2">
        <div className="w-32">
          <img
            src={LOGO_URL}
            alt=""
          />
        </div>
        <div className="flex p-4">
          <h1 className="px-4 hover:text-amber-600"><Link to={`/`}>Home</Link></h1>
          <h1 className="px-4 hover:text-amber-600"><Link to="/about">About</Link></h1>
          <h1 className="px-4 hover:text-amber-600"><Link to={`/contact`}>ContactUs</Link></h1>
          <h1 className="px-4 hover:text-amber-600"><Link to={"/grocery"}>Grocery</Link></h1>
          <h1 className="px-4 hover:text-amber-600"><Link to={"/cart"}>Cart({cartItems.length})</Link></h1>
          <button className="flex px-4 hover:text-amber-600"
              onClick={() =>{
                  if(loginbtn === "Login"){
                    setloginbtn("Logout")
                  }
                  else{
                    setloginbtn("Login")
                  }
              }}>{loginbtn}</button>
        </div>
      </div>
    );
  };

export default Header;  