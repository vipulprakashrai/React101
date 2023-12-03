import {useState} from "react";

export default function User(props){
    const [count , setcount] = useState(0);
    
    return(
        <div className="user">
         <p>Count - {count}</p>   
         <button onClick={() => {
             let result = count + 1;
             setcount(result);
         }
         }>+</button>
        <h2>Name: {props.name}</h2>
        <h2>Location: GZB</h2>
        <h2>Contact: @vips</h2>
        </div>
    )
}