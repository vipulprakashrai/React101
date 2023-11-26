import {CDN_URL} from "../utils/constants.js";

const Restaurant = (props) => {
    const {resData} = props
    
    const {cloudinaryImageId,name,avgRating,cuisines,sla} = resData?.info
     // console.log(resData);//Object
      return (
        <div>
          <div className="res-card">
            <img className="img1"
              src={ CDN_URL + cloudinaryImageId }
              alt=""
            />
            <h3 className="res-card-item">{name}</h3>
            <p className="res-card-item">{avgRating} star</p>
            <p className="res-card-item">{cuisines.toString()} </p>
            <p className="res-card-item">{sla?.slaString}</p>
            
          </div>
        </div>
      );
    };

export default Restaurant;    