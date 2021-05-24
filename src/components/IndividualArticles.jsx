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

  // sortArticles = (event) => {
  //   const query = event.target.value;
  //   api.sortBy(query).then((articles) => {
  //     this.setState({ articles });
  //   });
  // };

  render() {
    console.log(this.state.articles);
    const { body, votes, title } = this.state.article;
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

          {/* <Link to={`/articles/${article_id}/comments`}>
            <p>Comments: {comment_count}</p>
          </Link> */}

          <IndividualArticleComments article_id={article_id} />

          <h2 className="vote-h2">Vote on this article</h2>
          <VoteChanger value_id={article_id} word="articles" votes={votes} />
        </section>
      </div>
    );
  }
}

export default IndividualArticle;
