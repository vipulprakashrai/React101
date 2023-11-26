import {LOGO_URL} from "../utils/constants.js";

import { useState } from "react";

const Header = () => {

const [loginbtn, setloginbtn] = useState("Login");
console.log("header rendered");
    return(
      <div className="header">
        <div id="logo">
          <img
            src={LOGO_URL}
            alt=""
          />
        </div>
        <div id="item">
          <h1>Home</h1>
          <h1>About</h1>
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