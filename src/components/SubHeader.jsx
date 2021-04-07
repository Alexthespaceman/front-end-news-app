import { Link } from "@reach/router";
import React from "react";

function SubHeader(props) {
  return (
    <div className="sub-header">
      <button>prev page</button>
      <button>next page</button>
      <Link to="/topics">
        <p>Topics</p>
      </Link>
    </div>
  );
}

export default SubHeader;
