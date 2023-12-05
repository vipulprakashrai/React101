import User from "./User.js"
import UserClass from "./UserClass.js"
import {Component} from "react";

class About extends Component{
    constructor(props){
       super(props);

    }

  componentDidMount(){
    //console.log("componentDidMount called");
  }

    render(){
        return(
            <>
            <h1>About me</h1>
            {/* <h2>This is online food ordering app</h2> */}
            <UserClass name={"R Vipul"} location={"gzb"}/>
            </>
        ) 
    }
}

export default About;
