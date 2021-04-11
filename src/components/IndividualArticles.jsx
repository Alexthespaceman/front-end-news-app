import { Link } from "@reach/router";
import React, { Component } from "react";
import * as api from "../api";
import VoteChanger from "./VoteChanger";
class IndividualArticle extends Component {
  state = {
    article: [],
    isLoading: true,
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticleById(article_id).then((articles) => {
      this.setState({ article: articles, isLoading: false });
    });
  }

  // addComment = (value) => {
  //   this.setState((currentState) => {
  //     return { comments: [...currentState.comments, value] };
  //   });
  // };

  render() {
    const { body, comment_count, votes, title } = this.state.article;
    const { article_id, isLoading } = this.props;
    return (
      <div>
        {isLoading ? (
          <p>loading</p>
        ) : (
          <div>
            <section className="article">
              <h2>{title}</h2>
              <p>{body}</p>

              <Link to={`/articles/${article_id}/comments`}>
                <p>Comments: {comment_count}</p>
              </Link>

              <VoteChanger
                value_id={article_id}
                word="articles"
                votes={votes}
              />
            </section>
          </div>
        )}
      </div>
    );
  }
}

export default IndividualArticle;
