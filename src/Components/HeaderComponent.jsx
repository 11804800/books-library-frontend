import { FaHouse, FaBookMedical,FaBookAtlas, FaGithub } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

function HeaderComponent() {
  const route=useNavigate();
  return (
    <div id="header-container">
        <div id="header-logo">
          <img src="/footer-logo.png" width="200" height="100" alt="header-logo" className="header-logo-img" onClick={()=>route("/")}/>
        </div>
        <div className="header-nav-links">
          <a href="https://github.com/11804800/books-library-frontend" className="nav-links"><FaGithub/>Project Link</a>
          <Link to="/" className="nav-links"><FaHouse/>Home</Link>
          <Link to="/books" className="nav-links"><FaBookAtlas/> Browse Books</Link>
          <Link to="/add-new-book" className="nav-links"><FaBookMedical/> Add New Book</Link>
        </div>
    </div>
  );
}

export default HeaderComponent;
