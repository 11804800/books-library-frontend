import { createBrowserRouter } from "react-router-dom";
import HomeComponent from "../Components/HomeComponent";
import App from "../App";
import AddNewBook from "../Components/AddNewBook";
import BrowseBooks from "../Components/BrowseBooks";

const BrowseRouter=createBrowserRouter([{
    path:"/",
    element:<App/>,
    children:[
        {
            path:"/",
            element:<HomeComponent/>
        },
        {
            path:"/Add-new-book",
            element:<AddNewBook/>
        },
        {
            path:"/browse-books",
            element:<BrowseBooks/>
        }
    ]
}])

export default BrowseRouter;