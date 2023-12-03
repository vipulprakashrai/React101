import {useState} from "react";

export default function User(props){
    const [count] = useState(0);
    const [count2] = useState(5);

    return(
        <div className="user">
         <p>Count - {count}</p>   
         <p>Count2 - {count2}</p> 
        <h2>Name: {props.name}</h2>
        <h2>Location: GZB</h2>
        <h2>Contact: @vips</h2>
        </div>
    )
}