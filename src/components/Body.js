import Restaurant from "./Restaurant.js";

import { useEffect, useState } from "react";

//import resList from "../utils/mockData.js";


const Body = () => {
// local state variable
const [RestaurantList, setRestaurantList] = useState([]);

const[filteredRestaurant, setfilteredRestaurant] = useState([]);

const [searchText, setsearchText] = useState("");

  useEffect(() => {
       fetchData()
  }, 
  []);
 
  const fetchData = async() =>{
       let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6460176&lng=77.3695166&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       let jsonData = await data.json()
         setRestaurantList(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      
         setfilteredRestaurant(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

if(RestaurantList.length === 0){
  return <h1>Loading....</h1>
}

function handlechange(e){
  setsearchText(e.target.value)
}
  return (
    <div className="body">
      <div className="search">
        <input type="text" className="search-box" value={searchText} onChange={handlechange}/>
        <button onClick={() =>{
          // on search click filter the searched restaurant
          let filterRes = RestaurantList.filter((item) => item.info.name.toLowerCase().includes(searchText.toLowerCase()))
          
          setfilteredRestaurant(filterRes)
          //console.log("btn clcked");
        }}>search</button>
      </div>

      <button className="filter-btn"
       onClick={()=>{
        // filter logic
       let filteredList = RestaurantList.filter((item) => item.info.avgRating > 4)
       setfilteredRestaurant(filteredList);
       
       }}>
        Filter Top Restaurant
      </button>
      <div className="res-cont">
      { 
      // map method returns the entire new array whereas forEach Method 
      // does not returns a new array based on the given array.
      filteredRestaurant.map((obj) => <Restaurant key ={obj.info.id} resData={obj}/>)
      }
      </div>
    </div>
  );
};


export default Body;  