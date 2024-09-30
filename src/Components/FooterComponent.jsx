import { Link } from "react-router-dom";

const FooterComponent = () => {

  const date=new Date();
  const year=date.getFullYear();
  return (
    <>
      <div id="footer-container">
        <div className="footer-image-container">
          <img
            src="/footer-logo.png"
            alt="footer-logo-image"
            className="footer-logo-img"
          />
        </div>
        <div className="footer-links-container">
          <h1>Links</h1>
          <div>
            <Link to="/" className="footer-link">
              Home
            </Link>
            <Link to="/books" className="footer-link">
              Browse Books
            </Link>
            <Link to="/add-new-book" className="footer-link">
              Add New Books
            </Link>
          </div>
        </div>
        <div className="footer-form-container">
          <p style={{ fontWeight: 500 }}>Subscribe For Our Newletter</p>
          <div>
            {" "}
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="footer-input"
              required
            />
            <button className="footer-form-btn">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="copyright-div">
        All rights reserved @{year}
      </div>
    </>
  );
};

export default FooterComponent;
