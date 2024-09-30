import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

const BooksCategory = (props) => {

  const params=useParams();

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
        <p>Category</p> 
        /
        {params?.category}
      </div>
    </div>
  );
};


export default BooksCategory;