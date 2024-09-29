import { FaHouse, FaBookMedical,FaBookAtlas } from "react-icons/fa6";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <div>
        <div>
          <img src="./logo2.png" width="200" height="100" alt="header-logo" style={{objectFit:"contain"}}/>
        </div>
        <div>
          <Link to="/"><FaHouse/>Home</Link>
          <Link to="/browse-books"><FaBookAtlas/> Books</Link>
          <Link to="/add-new-book"><FaBookMedical/> Add New Book</Link>
        </div>
    </div>
  );
}

export default HeaderComponent;
