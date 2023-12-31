
import useRestaurantMenu from "../utils/useRestaurantMenu.js"
import {useParams} from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory.js";



const RestaurantMenu = () => {

  const {resId} = useParams();
// created my own custum hook to fetch data
  const resMenu = useRestaurantMenu(resId);


if(resMenu === null){
  return <p>loading data</p>
}


const {itemCards} = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
 || resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

// const {categories} = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
//  || resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

console.log(resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

const categories = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((obj) => obj?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );
console.log(categories);
return(
      <div className="px-96 border-gray-200 border-b-2" >
        <div className="border-gray-200 border-b-2 mt-10">
          <div className="flex gap-72">
              <h1 className="font-bold text-xl">{resMenu?.data?.cards[0]?.card?.card?.info?.name}</h1>
             <p>{resMenu?.data?.cards[0]?.card?.card?.info?.avgRating} star</p>
          </div>
            <div><p>{resMenu?.data?.cards[0]?.card?.card?.info?.cuisines.toString()}</p></div>
          <div className=" inline-flex gap-5">
            <p>{resMenu?.data?.cards[0]?.card?.card?.info?.sla?.deliveryTime}MINS</p>
            <p>{resMenu?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>
          </div>
          <br></br>
        </div>
        <br></br>
           {/* categories accordian*/}
           {
             categories.map((category) => <RestaurantCategory data={category?.card?.card}/>)
           }
            


            
            {/* <ul>
             { itemCards && itemCards.map((item) => <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>)} 
            </ul> */}
            {/* <div>
             {categories && categories.map((data) => (
              <Submenu data={data.itemCards} title ={data.title}/>
             ))}
            </div> */}
        </div>
      )
}

export default RestaurantMenu;