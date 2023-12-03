import React from "react";
class UserClass extends React.Component{
    constructor(props){
       super(props);
       this.state = {
          userdata:{
            name: "",
            location: "",
            avatar_url:"",
        }
       }
    }
    
   async componentDidMount(){
        // API call
        const data = await fetch("https://api.github.com/users/vipulprakashrai");
        const jsonData = await data.json();
        console.log(jsonData);
         
       this.setState({
          userdata: jsonData
       }); 
    }

    render(){
       const{name,location,avatar_url} = this.state.userdata;
       
        return(
            <div className="user">
              <img src={avatar_url}/>
              <h2>Name: {name}</h2>
              <h2>Location: {location}</h2>
              <h2>Contact: @vips</h2>
            </div>
        )
    }
}

export default UserClass;