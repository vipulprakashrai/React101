import React from "react";
class UserClass extends React.Component{
    constructor(props){
       super(props);
       console.log(props);

       this.state = {
         count: 0,
         count2: 2,
       }
    }
    render(){
       const{location} = this.props;
       const {count2} = this.state;
        return(
            <div className="user">
                <p>Count - {this.state.count}</p>
                <p>Count2 - {count2}</p>
              <h2>Name: {this.props.name}</h2>
              <h2>Location: {location}</h2>
              <h2>Contact: @vips</h2>
            </div>
        )
    }
}

export default UserClass;