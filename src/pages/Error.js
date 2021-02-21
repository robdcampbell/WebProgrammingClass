import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <p>
        Not in Kansas anymore, time to head <Link to="/">home.</Link>{" "}
      </p>
    </div>
  );
};

export default Error;
