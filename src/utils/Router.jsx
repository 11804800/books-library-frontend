import { createBrowserRouter } from "react-router-dom";
import HomeComponent from "../Components/HomeComponent";
import App from "../App";
import AddNewBook from "../Components/AddNewBook";
import BrowseBooks from "../Components/BrowseBooks";
import ErrorPage from "../Components/ErrorPage";

const BrowseRouter=createBrowserRouter([{
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
        {
            path:"/",
            element:<HomeComponent/>
        },
        {
            path:"/add-new-book",
            element:<AddNewBook/>
        },
        {
            path:"/books",
            element:<BrowseBooks/>
        }
    ]
}])

export default BrowseRouter;