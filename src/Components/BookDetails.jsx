import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function BookDetails(props) {
  return (
    <div className="container">
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
        /
      </div>
    </div>
  );
}

export default BookDetails;
