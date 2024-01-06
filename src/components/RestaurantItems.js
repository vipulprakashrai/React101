const RestaurantItems = ({resItem}) => {
    return(
        <div className="my-10 table-fixed">
          <div className="flex justify-between">
            <div>{resItem?.name}</div>
            <div className="">
            <img className="w-20 -mt-10" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+resItem?.imageId} 
             alt=""
            />
             <button className=" w-20 shadow-xl bg-white text-green-600 size-2">ADD</button>
            </div>
           </div>
          
           <div className=" border-gray-200 border-b-2">Rs{resItem?.price/100}</div>
           <br></br>
        </div>
    )
}

export default RestaurantItems;