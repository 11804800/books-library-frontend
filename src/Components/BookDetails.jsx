import { FaArrowLeft } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

function BookDetails() {
  //getting params by useParams Hook to get the id of the book to display details
  const params = useParams();

  //getting book data from the redux store
  const books = useSelector((state) => {
    return state.books.books;
  });

  //useNavigate Hook
  const route = useNavigate();

  const Book = books.filter((item) => item.id == params.id);

  return (
    <div className="container">
      {/* breadcrumb for back to browse and to home also */}
      <div className="breadcrumb-container">
        <Link to="/" className="breadcrumb-link">
          <FaArrowLeft size={12} />
          Home
        </Link>
        /
        <Link to="/books" className="breadcrumb-link">
          <FaArrowLeft size={12} />
          Browse Books
        </Link>
        / {Book[0]?.title}
      </div>
      <div className="container" style={{width:"100%"}}>
        <div className="back-btn-div">
          <button onClick={() => route("/books")} className="back-btn">
            <FaArrowLeft />
            Back to Browse
          </button>
          <p></p>
        </div>
        <div className="book-detail-container">
          <div className="book-image-con">
            <img src={Book[0].cover_image} alt={Book[0].title} className="book-img" />
          </div>
          <div className="book-details">
            <h2 className="book-title">
              {Book[0].title}
              {Book[0]?.popular && <span className="tag">popular</span>}
            </h2>
            <div className="details-div">
              <p className="heading">Author</p> : <p className="name">{Book[0]?.author}</p>
            </div>
            <div className="details-div">
              <p className="heading">Publication Year</p>:<p className="name">{Book[0]?.publication_year}</p>
            </div>
            <div className="book-description-div">
              <p className="heading">Description :</p>
              <p className="name">{Book[0].description}</p>
            </div>
            <div className="details-div">
              <p className="heading">Rating</p>:<p className="name">{Book[0]?.rating}</p>
            </div>
            <div className="book-genre-div">
              <p className="heading">Genre :</p>
              <div className="book-genre">
              {Book[0]?.genre.map((item) => {
                return (
                  <div key={item} className="genre-name">
                    {item}
                  </div>
                );
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popular-books-container">
        <h1>Related Genre Books</h1>
        <div className="books-carusel">
          {books
            .filter((item) => item?.genre.includes(Book[0].genre[0]))
            .map((element) => {
              return (
                <div
                  className="book-card"
                  key={element.id}
                  onClick={() => route(`/books/${element.id}`)}
                >
                  <div className="book-card-img-container">
                    <img
                      src={element?.cover_image}
                      alt={element.title}
                      className="book-card-img"
                    />
                  </div>
                  <div className="book-card-body">
                    <p className="title">{element.title}</p>
                    <Link
                      to={`/books/${element.id}`}
                      className="book-detail-link"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
