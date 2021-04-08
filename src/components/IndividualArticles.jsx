import { Link } from "@reach/router";
import React, { Component } from "react";
import * as api from "../api";

class IndividualArticle extends Component {
  state = {
    article: {},
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticleById(article_id).then(({ articles }) => {
      this.setState({ article: articles });
    });
  }

  render() {
    const { article_id } = this.props;

    return (
      <section className="article">
        <p>hello doug</p>
        <h2>{this.state.article.title}</h2>
        <p>{this.state.article.body}</p>
        <p>votes: {this.state.article.votes}</p>
        <p>Comments: {this.state.article.comment_count}</p>
        <button>up vote</button>
        <button>down vote</button>
        <Link to={`/articles/${article_id}/comments`}>
          <button>Comments</button>
        </Link>
        <button>Add Comment</button>
      </section>
    );
  }
}

export default IndividualArticle;
