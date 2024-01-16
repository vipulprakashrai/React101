import {CDN_URL} from "../utils/constants.js";

const Restaurant = (props) => {
    const {resData} = props

    const {cloudinaryImageId,name,avgRating,cuisines,sla} = resData?.info
     //console.log(resData);//Object
     
      return (
        <div className="w-[290px] h-[320px]  m-4 p-4 shadow-xl hover:bg-slate-200">
          <div className="h-3/5">
           <img className="h-full w-full rounded-lg"
              src={ CDN_URL + cloudinaryImageId }
              alt=""
            />
          </div>
          <div className="h-2/5 py-2">
            
            <h3 className="font-bold">{name}</h3>
            <p >{avgRating} star</p>
            <p >{cuisines.toString()} </p>
            <p >{sla?.slaString}</p>
          </div> 
        </div>
      );
    };

export default Restaurant;    