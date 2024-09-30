import { createBrowserRouter } from "react-router-dom";
import HomeComponent from "../Components/HomeComponent";
import App from "../App";
import AddNewBook from "../Components/AddNewBook";
import BrowseBooks from "../Components/BrowseBooks";
import ErrorPage from "../Components/ErrorPage";
import BookDetails from "../Components/BookDetails";
import BooksCategory from "../Components/BooksCategory";

const BrowseRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeComponent />,
      },
      {
        path: "/add-new-book",
        element: <AddNewBook />,
      },
      {
        path: "/books",
        element: <BrowseBooks />,
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
      },
      {
        path: "/category/:category",
        element: <BooksCategory />,
      },
    ],
  },
]);

export default BrowseRouter;
