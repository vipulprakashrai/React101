import {LOGO_URL} from "../utils/constants.js";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {

const [loginbtn, setloginbtn] = useState("Login");

    return(
      <div className="header">
        <div id="logo">
          <img
            src={LOGO_URL}
            alt=""
          />
        </div>
        <div id="item">
          <h1><Link to={`/`}>Home</Link></h1>
          <h1><Link to="/about">About</Link></h1>
          <h1><Link to={`/contact`}>ContactUs</Link></h1>
          <h1><Link to={"/grocery"}>Grocery</Link></h1>
          <h1>Cart</h1>
          <button className="login"
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