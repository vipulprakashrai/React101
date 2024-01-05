
const RestaurantCategory = ({data}) =>{
   
    return(
        <div className=" mt-3 py-1 bg-slate-300 font-bold flex justify-between">
         <div className="text-lg ">{data.title}({data.itemCards.length})</div>
         <div className="pr-1 text-2xl">-</div>
        </div>
    )
}
export default RestaurantCategory;