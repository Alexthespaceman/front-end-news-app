import React, { Component } from "react";
import * as api from "../api";
import ErrorDisplayer from "./ErrorDisplayer";
import IndividualArticleComments from "./IndividualArticleComments";
import Loader from "./Loader";
import VoteChanger from "./VoteChanger";

class IndividualArticle extends Component {
  state = {
    article: [],
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    const { article_id } = this.props;
    api
      .getArticleById(article_id)
      .then((articles) => {
        this.setState({ article: articles, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err, isLoading: false });
      });
  }

  render() {
    const { body, votes, title, comment_count, topic } = this.state.article;
    const { article_id } = this.props;
    const { err, isLoading } = this.state;

    if (isLoading) {
      return <Loader />;
    }
    if (err) {
      const { response } = err;

      return (
        <ErrorDisplayer status={response.status} msg={response.data.msg} />
      );
    }

    return (
      <div>
        <section className="article">
          <h2 className="article-title">{title}</h2>
          <p className="article-body">{body}</p>
          <p className="posted-in"> Posted in {topic}</p>

          <IndividualArticleComments
            article_id={article_id}
            comment_count={comment_count}
          />

          <h2 className="vote-h2">Vote on this article</h2>
          <VoteChanger value_id={article_id} word="articles" votes={votes} />
        </section>
      </div>
    );
  }
}

export default IndividualArticle;
