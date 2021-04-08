import { Link } from "@reach/router";
import React, { Component } from "react";
class Navbar extends Component {
  state = [];

  render() {
    return (
      <div className="nav">
        <Link to="#">
          <button>most popular</button>
        </Link>

        <button>newest</button>
        <button>most rated</button>
        <Link to="/add-article">
          <button className="add-article-btn"> Add Article </button>
        </Link>
      </div>
    );
  }
}

export default Navbar;
