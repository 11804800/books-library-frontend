import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function AddNewBook() {
  return (
    <div className="container">
      <div className="breadcrumb-container">
        <Link to="/" className="breadcrumb-link">
          <FaArrowLeft size={12} />
          Home
        </Link>
        /<p>Add New Book</p>
      </div>
      <div className="add-new-book-form-container">
        <h1>Add New Book</h1>
        <div className="add-new-book-form">
          <label>Title</label>
          <input type="text" placeholder="Enter the Book Name" />
          <label>Author Name</label>
          <input type="text" placeholder="Enter Author Name" />
          <div>
            <label>Publish Year</label>
            <input type="date" />
          </div>
          <label>Description</label>
          <textarea placeholder="Enter Something...." />
          <label>Genre 1</label>
          <select>
            <option>Genre</option>
          </select>
          <label>Genre 2</label>
          <select>
            <option>Genre</option>
          </select>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AddNewBook;
