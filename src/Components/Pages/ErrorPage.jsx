
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Oops! Recipe Not Found</h2>
        <p className="error-description">
          It looks like the page you're looking for doesn't exist or has been moved.
        </p>
        <NavLink to="/" className="home-link">
          Go Back to Home
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
