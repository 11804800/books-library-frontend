import { useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Genre } from "../utils/DummyBooks";
import { AddBook, SetImage } from "../store/Book";

function AddNewBook() {
  const dispatch = useDispatch();
  const fileInput = useRef();
  const route = useNavigate();
  const [BookDetail, setBookDetail] = useState({
    title: "",
    author: "",
    description: "",
    genre1: "",
    genre2: "",
    year: 0,
    rating: 0,
  });

  function OnValueChange(e) {
    setBookDetail((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const image = useSelector((state) => {
    return state.books.image;
  });

  function FormSubmit() {
    if (
      BookDetail.title &&
      BookDetail.author &&
      BookDetail.description &&
      BookDetail.genre1 &&
      BookDetail.genre2 &&
      BookDetail.year &&
      image &&
      BookDetail.rating
    ) {
      dispatch(
        AddBook({
          id: Math.random(),
          title: BookDetail.title,
          genre: [BookDetail.genre1, BookDetail.genre2],
          author: BookDetail.author,
          year: BookDetail.year,
          cover_image: URL.createObjectURL(image),
          description: BookDetail.description,
          rating: BookDetail.rating,
        })
      );
      route("/books");
    } else {
      alert("Please Fill the form correctly");
    }
  }

  return (
    <div className="container">
      <div className="breadcrumb-container">
        <Link to="/" className="breadcrumb-link">
          <FaArrowLeft size={12} />
          Home
        </Link>
        /<p>Add New Book</p>
      </div>
      <h1>Add New Book</h1>
      <div className="add-new-book-form-container">
        <div className="form-book-image">
          {image ? (
            <img src={URL.createObjectURL(image)} alt="Book-image" />
          ) : (
            <div className="book-img-input-con">
              <h2>Please Select Book Image</h2>
              <input
                type="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => dispatch(SetImage(e.target.files[0]))}
                ref={fileInput}
                style={{ display: "none" }}
              />
              <button
                className="input-image-btn"
                onClick={() => {
                  fileInput.current.click();
                }}
              >
                Select Book Image
              </button>
            </div>
          )}
        </div>
        <div className="add-new-book-form">
          <div className="flex-col">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter the Book Name"
              className="input"
              required
              onChange={(e) => OnValueChange(e)}
            />
          </div>
          <div className="flex-col">
            <label>Author Name</label>
            <input
              type="text"
              name="author"
              placeholder="Enter Author Name"
              className="input"
              required
              onChange={(e) => OnValueChange(e)}
            />
          </div>
          <div className="genre-select-con">
            <div className="genre-select">
              <label>Genre 1 :</label>
              <select
                className="select"
                required
                name="genre1"
                onChange={(e) => OnValueChange(e)}
              >
                <option>Select</option>
                {Genre.filter((item) => item !== BookDetail.genre2).map(
                  (item) => {
                    return <option key={item}>{item}</option>;
                  }
                )}
              </select>
            </div>
            <div className="genre-select">
              <label>Genre 2 :</label>
              <select
                className="select"
                required
                name="genre2"
                onChange={(e) => OnValueChange(e)}
              >
                <option>Select</option>
                {Genre.filter((item) => item !== BookDetail.genre1).map(
                  (item) => {
                    return <option key={item}>{item}</option>;
                  }
                )}
              </select>
            </div>
          </div>
          <div className="flex-col">
            <label className="year-label">Publish Year : </label>
            <input
              type="number"
              className="input"
              required
              name="year"
              onChange={(e) => OnValueChange(e)}
            />
          </div>
          <div className="flex-col">
            <label >Rating : </label>
            <input
              type="number"
              className="input"
              required
              name="rating"
              onChange={(e) => OnValueChange(e)}
            />
          </div>
          <div className="flex-col">
            <label>Description</label>
            <textarea
              placeholder="Enter Something...."
              cols={2}
              rows={9}
              className="input"
              required
              name="description"
              onChange={(e) => OnValueChange(e)}
            />
          </div>
          <button className="submit-btn" onClick={FormSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNewBook;
