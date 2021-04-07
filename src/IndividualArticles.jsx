import { Component, default as React, default as React } from "react";

class IndividualArticles extends Component {
  render() {
    return (
      <section className="article">
        <button>up vote</button>
        <button>down vote</button>
        <Link to="/articles/:id">
          <button>Comments</button>
        </Link>
      </section>
    );
  }
}

export default IndividualArticles;
