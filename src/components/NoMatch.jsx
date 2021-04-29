import { Link } from "@reach/router";
import React from "react";
function NoMatch(props) {
  return (
    <div className="NoMatch">
      <h1>We could not find what you are looking for...</h1>
      <Link to="/">Go back to the Home Page</Link>
    </div>
  );
}

export default NoMatch;
