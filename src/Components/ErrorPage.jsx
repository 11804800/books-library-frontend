import { useRouteError } from "react-router-dom";

function ErrorPage(){

    const err=useRouteError();
    console.log(err.statusText,err.status,err.data);
    return (
        <div>Error Page</div>
    )
}

export default ErrorPage;