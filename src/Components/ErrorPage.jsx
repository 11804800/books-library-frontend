import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {

  const err = useRouteError();

  return (
    <div className="error-container">
      <div className="fredoka sub-container">
        <h1 className="fredoka" style={{ color: "rgb(1, 117, 172)" }}>
          OPPS!
        </h1>
        <p>Page Not Found</p>
      </div>
      <img src="/Error-Page-img2.png" alt="error-image" className="error-img" />
      <div className="sub-container">
        <p className="fredoka">{err.data}</p>
        <Link t="/" className="home-link">
          HomePage
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
