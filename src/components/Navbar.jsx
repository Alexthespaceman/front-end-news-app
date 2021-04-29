import { Link } from "@reach/router";
import { Component } from "react";

class Navbar extends Component {
  state = { articles: [] };

  render() {
    return (
      <section className="nav">
        <h4> sort Articles by : </h4>

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
      </section>
    );
  }
}

export default Navbar;
