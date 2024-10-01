import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function HomeComponent() {

  const books=useSelector((state)=>{
    return state.books.books
  });

  const route=useNavigate();

  return (
    <div className="home-container">
      <div className="home-welcome-div">
        <div className="message-div">
          <div className="intro-div">
            <h1 className="welcome-text">Welcome</h1>
            <h1 className="intro-heading">
              <span>To The ISLibrary </span>
            </h1>
            <p className="intro-text">An Online Library System App</p>
          </div>
          <div className="quote">
            <p id="message">
              "There Is More Treasure In Books than In All Pirates Loots On
              Treasure Land"
            </p>
            <p id="author">By Walt Disney</p>
          </div>
          <div className="outro">
            <p className="outro-text">
              There Is Better Way To Grow With Books. We Offer A Wide Variety Of
              Books Category
            </p>
            <Link to="/books" className="intro-page-btn">
              Explore Now
            </Link>
          </div>
        </div>
        <div className="image-container">
          <img
            src="/banner-img1.png"
            alt="Banner Image"
            className="banner-img"
          />
        </div>
      </div>
      <div className="category-container">
        <h1>Books Category</h1>
        <div className="category-list-container">
          <Link to="/category/Adventure" className="category-link-card">
          <img
            src="/category/adventure.png"
            alt="Adventure"
            loading="lazy"
            className="category-img"
          />
          <p>Adventure Genre</p>
          </Link>
          <Link to="/category/Romance" className="category-link-card">
          <img
            src="/category/romance.jpg"
            alt="Romance"
            loading="lazy"
            className="category-img"
          />
          <p>Romance Genre</p>
          </Link>
          <Link to="/category/Comedy" className="category-link-card">
          <img
            src="/category/comedy.jpg"
            alt="comedy"
            loading="lazy"
            className="category-img"
          />
          <p>Comedy Genre</p>
          </Link>
          <Link to="/category/Horror" className="category-link-card">
          <img
            src="/category/horror.png"
            alt="horror"
            loading="lazy"
            className="category-img"
          />
          <p>Horror Genre</p>
          </Link>
          <Link to="/category/Fantasy" className="category-link-card">
          <img
            src="/category/fantasy.jpg"
            alt="Fantasy"
            loading="lazy"
            className="category-img"
          />
          <p>Fantasy Genre</p>
          </Link>
          <Link to="/category/Mythology" className="category-link-card">
          <img
            src="/category/Mythology.jpg"
            alt="Mythology"
            loading="lazy"
            className="category-img"
          />
          <p>Mythology Genre</p>
          </Link>
          <Link to="/category/Science Fiction" className="category-link-card">
          <img
            src="/category/sci-fi.png"
            alt="Sci-fi"
            loading="lazy"
            className="category-img"
          />
          <p>Sci-fi Genre</p>
          </Link>
          <Link to="/category/Fiction" className="category-link-card">
          <img
            src="/category/fiction.jpg"
            alt="Fiction"
            loading="lazy"
            className="category-img"
          />
          <p>Fiction Genre</p>
          </Link>
        </div>
      </div>
      <div className="popular-books-container">
        <h1>Popular Books</h1>
        <div className="books-carusel">
          {
            books.filter((item)=>item?.popular).map((element)=>{
              return (
                <div className="book-card" key={element.id} onClick={()=>route(`/books/${element.id}`)}>
                  <div className="book-card-img-container">
                    <img src={element?.cover_image} alt={element.title} className="book-card-img"/> 
                  </div>
                  <div className="book-card-body">
                    <p className="title">{element.title}</p>
                    <Link to={`/books/${element.id}`} className="book-detail-link">View Details</Link>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
