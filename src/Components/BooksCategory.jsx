import { FaArrowLeft } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const BooksCategory = (props) => {

  const params=useParams();

  const books=useSelector((state)=>{
    return state.books.books
  });

  const filteredbook=books.filter((item)=>item.genre.includes(params.category));


  return (
    <div className="container">
      <div className="breadcrumb-container">
        <Link to="/" className="breadcrumb-link">
          <FaArrowLeft size={12} />
          Home
        </Link>
        /
        <p>Category</p> 
        /
        {params?.category}
      </div>
      <div className="books-container">
        {filteredbook.map((item) => {
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
                <p className="book-description">{item?.description}</p>
                <Link to={`/books/${item.id}`} className="book-detail-link">View Details</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default BooksCategory;