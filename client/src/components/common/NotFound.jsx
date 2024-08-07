import React from "react";
import { Link } from "react-router-dom";

import Path from "../../paths";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="errorTitle">404</h1>
      <img src="/images/404.png" alt="404" className="not-found-image" />
      <p>Sorry, the page you are looking for does not exist.</p>
      <div className="back-link-container">
        <Link to={Path.Home}>
          <img
            src="/images/home_icon.png"
            alt="Go Back"
            className="home-icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
