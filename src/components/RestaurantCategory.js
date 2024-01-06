import { useState } from "react";
import RestaurantItems from "./RestaurantItems";

const RestaurantCategory = ({data}) =>{
  const [isActive, setIsActive] = useState(false);

  function handleClick(){
    setIsActive(!isActive);
  }

    return(
        <div>
          <div className=" mt-3 py-1 bg-slate-100 font-bold flex justify-between"
            onClick={handleClick} >
            <div className="text-lg ">{data.title}({data.itemCards.length})</div>
            <div className="pr-1 text-2xl">{isActive ? '-':'+'}</div>
          </div>
          {isActive && <div>
            {data.itemCards.map((item)=> <RestaurantItems resItem={item?.card?.info}/>)}
          </div>}
        </div>
    )
}
export default RestaurantCategory;