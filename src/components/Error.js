import { useRouteError } from "react-router-dom"

export default function Error(){
    const error = useRouteError();
    console.error(error);
    return(
        <div>
            <h1>Oops! Something went wrong</h1>
            <i>{error.statusText || error.message}</i>
        </div>
    )
}