import {LOGO_URL} from "../utils/constants.js";

const Header = () => {
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
        </div>
      </div>
    );
  };

export default Header;  