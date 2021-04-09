import { Link } from "@reach/router";
import React, { Component } from "react";
import * as api from "../api";
import VoteChanger from "./VoteChanger";

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
        <h2>{this.state.article.title}</h2>
        <p>{this.state.article.body}</p>
        <p>votes: {this.state.article.votes}</p>
        <Link to={`/articles/${article_id}/comments`}>
          <p>Comments: {this.state.article.comment_count}</p>
        </Link>

        <VoteChanger
          value_id={article_id}
          word="articles"
          votes={this.state.article.votes}
        />
        <Link to={`/articles/${article_id}/comments/add-comment`}>
          <button>Add Comment</button>
        </Link>
      </section>
    );
  }
}

export default IndividualArticle;
