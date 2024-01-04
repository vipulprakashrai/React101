import Restaurant from "./Restaurant.js";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import resList from "../utils/mockData.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
// local state variable
const [RestaurantList, setRestaurantList] = useState([]);
console.log(RestaurantList);

const[filteredRestaurant, setfilteredRestaurant] = useState([]);

const [searchText, setsearchText] = useState("");

  useEffect(() => {
       fetchData()
  }, 
  []);
 
  const fetchData = async() =>{
       let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6460176&lng=77.3695166&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       let jsonData = await data.json()
       console.log(jsonData);
         setRestaurantList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      
         setfilteredRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const internetStatus = useOnlineStatus();

  if(internetStatus === false){
   return <h3>Looks like you have loss your internet connectivity</h3>
  }


if(RestaurantList.length === 0){
  return <h1>Loading....</h1>
}

function handlechange(e){
  setsearchText(e.target.value)
}


  return (
    <div className="body">
     <div className="flex items-center">
      <div className="p-4 m-4">
        <input type="text" className="  border border-solid border-black" value={searchText} onChange={handlechange}/>
        <button className="px-4 py-1 m-4 bg-slate-400 rounded-xl"
           onClick={() =>{
          // on search click filter the searched restaurant
          let filterRes = RestaurantList.filter((item) => item.info.name.toLowerCase().includes(searchText.toLowerCase()))
          
          setfilteredRestaurant(filterRes)
          //console.log("btn clcked");
        }}>search</button>
      </div>
      <div className="p-4 m-4">
        <button className=" p-1.5 border border-solid rounded-full border-gray-300 "
           onClick={()=>{
        // filter logic
       let filteredList = RestaurantList.filter((item) => item.info.avgRating > 4)
       setfilteredRestaurant(filteredList);
       
       }}>
        Filter Top Restaurant
        </button>
      </div>
     </div>
      <div className="flex flex-wrap justify-center gap-10">
      { 
      // map method returns the entire new array whereas forEach Method 
      // does not returns a new array based on the given array.

    filteredRestaurant.map((obj) => (
    <Link key ={obj.info.id} to={"/restaurant/" + obj.info.id}>
      <Restaurant  resData={obj}/>
    </Link>)
    )}
      </div>
    </div>
  );
};


export default Body;  