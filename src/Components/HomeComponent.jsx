import { Link } from "react-router-dom";

function HomeComponent() {
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
            <Link to="/" className="intro-page-btn">Explore Now</Link>
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
      </div>
      <div className="popular-books-container">
        <h1>Popular Books</h1>
      </div>
    </div>
  );
}

export default HomeComponent;
