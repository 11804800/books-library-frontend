import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { SearchBook } from "../store/Book";

function BrowseBooks() {
  //Search Params for even if the user refreshes the page the data will not be lost and it will stil show the 
  //filtered data
  const [searchParams, setSearchParams] = useSearchParams();

  //another way to navigate without using Link
  const route=useNavigate();

  //search state for searching the data
  const [search, setSearch] = useState(
    searchParams.get("query") ? searchParams.get("query") : ""
  );

//getting the books data from the redux store
  const BooksData = useSelector((state) => {
    return state.books.books;
  });

//filtering the data based on search by title or author 
  const books = BooksData.filter(
    (item) => item.title.includes(search) || item.author.includes(search)
  );

  //function to search for books
  function SearchFunction() {
    setSearchParams({
      query: search,
    });
  }

  //when the user will press enter on input text it will automatically search the data
  function OnKeyUp(e) {
    if (e.key === "Enter") {
      SearchFunction();
    }
  }
  
  //changing the search state and setting the value searchParams aslo
  function ONChange(value)
  {
    setSearchParams({
      query: value,
    });
    setSearch(value)
  }

  return (
    <div className="container">

      {/* For Info The Where Is User Now  */}
      <div className="breadcrumb-container">
        <Link to="/" className="breadcrumb-link">
          <FaArrowLeft size={12} />
          Home
        </Link>
        /<p>Browse Books</p>
      </div>
      {/* Search Input Container and value showing  */}
      <div className="search-container">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search any book by title or Author Name"
            className="search-input"
            onKeyUp={OnKeyUp}
            onChange={(e) => ONChange(e.target.value)}
            value={search}
          />
          <button className="search-btn" onClick={SearchFunction}>
            <FaSearch size={23} />
          </button>
        </div>
        {searchParams.get("query") && (
          <div className="search-result">
            <p>
              Showing total {books.length} result for{" "}
              {searchParams.get("query")}
            </p>
          </div>
        )}
      </div>

      <div className="books-container">

        {/* if the books length is greater than zero will show data else no results found */}
        {books.length > 0 ? (
          //mapping over the data
          books.map((item) => {
            return (
              <div className="books-card" key={item.id} onClick={()=>route(`/books/${item.id}`)}>
                <div className="book-card-img-container">
                  <img
                    src={item?.cover_image}
                    alt={item.title}
                    className="book-card-img"
                    loading="lazy"
                  />
                </div>
                <div className="book-card-body">
                  <p>{item?.title}</p>
                  <p className="book-description">{item?.description}</p>
                  <Link to={`/books/${item.id}`} className="book-detail-link">
                    View Details
                  </Link>
                </div>
              </div>
            );
          })
        ) :
        //no result found div
         (
          <div className="No-result-container fredoka">
            <h1>Sorry! No Results Are Found For {searchParams.get("query")}</h1>
          </div>
        )}
      </div>
    </div>
  );
}
export default BrowseBooks;
