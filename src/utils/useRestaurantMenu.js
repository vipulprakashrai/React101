import { useEffect, useState } from "react"

const useRestaurantMenu = (resId) => {
    const [resMenu, setresMenu] = useState(null);
         
    useEffect(()=>{
        fetchData();
    },
    []);
   
    const fetchData = async () =>{
        let data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6460176&lng=77.3695166&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        let jsonData = await data.json();
        console.log(jsonData);
        setresMenu(jsonData)
    }
    return resMenu;
}

export default useRestaurantMenu;