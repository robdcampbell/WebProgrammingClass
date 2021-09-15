import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error__page">
      <h1>Looks like we've 404'd....</h1>
      <p>
        <Link className="createAccount__btn " to="/">
          Return to Web Programming
        </Link>
      </p>
    </div>
  );
};

export default Error;
