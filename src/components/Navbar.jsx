import { Link } from "@reach/router";
import React, { Component } from "react";
class Navbar extends Component {
  state = [];

  render() {
    return (
      <div className="nav">
        <Link to="/articles/most-votes">
          <button>most popular</button>
        </Link>

        <Link to="/">
          <button>Newest</button>
        </Link>

        <Link to="/articles/author">
          <button>Author</button>
        </Link>

        <Link to="/add-article">
          <button className="add-article-btn"> Add Article </button>
        </Link>
      </div>
    );
  }
}

export default Navbar;
