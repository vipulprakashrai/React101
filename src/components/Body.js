import Restaurant from "./Restaurant.js";

import { useState } from "react";

import resList from "../utils/mockData.js";


const Body = () => {
// local state variable
const [RestaurantList, setRestaurantList] = useState(resList);
console.log(RestaurantList);

  return (
    <div className="body">
      <button className="filter-btn"
       onClick={()=>{
        // filter logic
       let filteredList = RestaurantList.filter((item) => item.data.avgRating > 4)
       console.log(filteredList);
       setRestaurantList(filteredList);
       
       }}>
        Filter Top Restaurant
      </button>
      <div className="res-cont">
      { 
      // map method returns the entire new array whereas forEach Method 
      // does not returns a new array based on the given array.
      RestaurantList.map((obj) => <Restaurant key ={obj.data.id} resData={obj}/>)
      }
      </div>
    </div>
  );
};


export default Body;  