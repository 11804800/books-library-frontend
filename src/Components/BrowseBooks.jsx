import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useSelector } from "react-redux";

function BrowseBooks() {
  const books=useSelector((state)=>{
    return state.books.books
  });


  return (
    <div className="container">
      <div className="breadcrumb-container">
        <Link to="/" className="breadcrumb-link"><FaArrowLeft size={12}/>Home</Link>
        /
        <p>Browse Books</p>
      </div>
      <div className="books-container">
        {books.map((item) => {
          return (
            <div className="books-card" key={item.id}>
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
                <Link to={`/books/${item.id}`} className="book-detail-link">View Details</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default BrowseBooks;
