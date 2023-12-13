import {LOGO_URL} from "../utils/constants.js";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {

const [loginbtn, setloginbtn] = useState("Login");

    return(
      <div className="flex justify-between items-center shadow-md mb-2">
        <div className="w-32">
          <img
            src={LOGO_URL}
            alt=""
          />
        </div>
        <div className="flex p-4">
          <h1 className="px-4"><Link to={`/`}>Home</Link></h1>
          <h1 className="px-4"><Link to="/about">About</Link></h1>
          <h1 className="px-4"><Link to={`/contact`}>ContactUs</Link></h1>
          <h1 className="px-4"><Link to={"/grocery"}>Grocery</Link></h1>
          <h1 className="px-4">Cart</h1>
          <button className="flex px-4"
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