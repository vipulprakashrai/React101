import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div id="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Pmgwclym0lINzs_-jo9RjVilemwJIgH0iw&usqp=CAU"
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

const Restaurant = (props) => {
  console.log(props);//Object
  return (
    <div>
      <div className="res-card">
        <img className="img1"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
          alt=""
        />
        <h3 className="res-card-item">{props.resName}</h3>
        <p className="res-card-item">{props.rating}</p>
        <p className="res-card-item">{props.cuisine}</p>
        <p className="res-card-item">{props.address}</p>
        <p className="res-card-item">{props.delvTime}</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="res-cont">
      <Restaurant resName="Pizza Hut" 
          cuisine="Pizzas" rating="4.4 stars" address="Indirapuram"
          delvTime="38 mins"
       />
      <Restaurant resName="Hira Sweets" 
          cuisine="North Indian,South Indian" rating="4.1 stars" address="Indirapuram"
          delvTime="18 mins"
      />
      <Restaurant resName="Kaleva"
           cuisine="Sweets,Indian, Street Food" rating="3.9 stars" address="Ghaziabad"
           delvTime="24 mins"
      />
      <Restaurant resName="Annapurna Bhojanalya"
           cuisine="Indian" rating="3.8 stars" address="Ghaziabad"
           delvTime="22 mins"/>
      <Restaurant resName="Burger King"
           cuisine="Burger,American" rating="4.3 stars" address="Indirapuram"
           delvTime="19 mins"/>
      </div>
    </div>
  );
};

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
