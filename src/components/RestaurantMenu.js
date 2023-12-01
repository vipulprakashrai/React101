import { useEffect, useState } from "react";

const RestaurantMenu = ()=>{

const [resMenu, setresMenu]= useState(null);

useEffect(()=>{
  fetchMenu()
},
[]);

const fetchMenu = async() =>{
  let data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6460176&lng=77.3695166&restaurantId=323615&catalog_qa=undefined&submitAction=ENTER");
  let jsonData = await data.json();
  console.log(jsonData);
  setresMenu(jsonData)
}
if(resMenu === null){
  return <p>loading data</p>
}


const {itemCards} = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards);
       return(
        <div className="menu-items">
            <h1>{resMenu?.data?.cards[0]?.card?.card?.info?.name}</h1>
            <p>{resMenu?.data?.cards[0]?.card?.card?.info?.avgRating} *</p>
            <p>{resMenu?.data?.cards[0]?.card?.card?.info?.cuisines}</p>
            <h3>Recommended</h3>
            <ul>
             {itemCards.map((item) => <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>)} 
            </ul>
            
        </div>
       )
}

export default RestaurantMenu;