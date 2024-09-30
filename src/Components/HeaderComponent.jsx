import { FaHouse, FaBookMedical,FaBookAtlas } from "react-icons/fa6";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <div id="header-container">
        <div id="header-logo">
          <img src="./footer-logo.png" width="200" height="100" alt="header-logo" className="header-logo-img"/>
        </div>
        <div className="header-nav-links">
          <Link to="/" className="nav-links"><FaHouse/>Home</Link>
          <Link to="/books" className="nav-links"><FaBookAtlas/> Browse Books</Link>
          <Link to="/add-new-book" className="nav-links"><FaBookMedical/> Add New Book</Link>
        </div>
    </div>
  );
}

export default HeaderComponent;
