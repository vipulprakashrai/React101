import Restaurant from "./Restaurant.js";

import resList from "../utils/mockData.js";


const Body = () => {
    return (
      <div className="body">
        <div className="res-cont">
        { 
        // map method returns the entire new array whereas forEach Method 
        // does not returns a new array based on the given array.
        resList.map(obj => <Restaurant resData={obj}/>)
        }
        </div>
      </div>
    );
  };

export default Body;  