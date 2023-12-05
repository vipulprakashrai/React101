import {useEffect, useState} from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu.js"
import {useParams} from "react-router-dom";
import Submenu from "./Submenu.js";


const RestaurantMenu = () => {

  const {resId} = useParams();
// created my own custum hook to fetch data
  const resMenu = useRestaurantMenu(resId);


if(resMenu === null){
  return <p>loading data</p>
}


const {itemCards} = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
 || resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

 const {categories} = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
 || resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


return(
        <div className="menu-items">
            <h1>{resMenu?.data?.cards[0]?.card?.card?.info?.name}</h1>
            <p>{resMenu?.data?.cards[0]?.card?.card?.info?.avgRating} *</p>
            <p>{resMenu?.data?.cards[0]?.card?.card?.info?.cuisines.toString()}</p>
           
            <ul>
             { itemCards && itemCards.map((item) => <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>)} 
            </ul>
            <div>
             {categories && categories.map((data) => (
              <Submenu data={data.itemCards} title ={data.title}/>
             ))}
            </div>
        </div>
      )
}

export default RestaurantMenu;