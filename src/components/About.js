import User from "./User.js"
import UserClass from "./UserClass.js"

export default function About(){
    return(
        <>
        <h1>About</h1>
        <h2>This is online food ordering app</h2>
        <User name={"Vipul R"}/>
        <UserClass name={"R Vipul"} location={"Gaziabad"}/>
        </>
    )
}