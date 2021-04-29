import { Link } from "@reach/router";
import { Component } from "react";
import * as api from "../api";
import { default as ErrorDisplayer, default as Loader } from "./ErrorDisplayer";
import VoteChanger from "./VoteChanger";

class ArticleList extends Component {
  state = { articles: [], isLoading: true, err: null };

  componentDidMount() {
    api
      .getAllArticles()
      .then(({ articles }) => {
        this.setState({ articles: articles, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err, isLoading: false });
      });
  }

  render() {
    const { articles, isLoading, err } = this.state;
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
        {articles.map((article) => {
          const {
            author,
            title,
            topic,
            votes,
            comment_count,
            article_id,
          } = article;
          return (
            <div key={article_id} className="articles">
              <div className="article-title-div">
                <Link to={`/article/${article_id}`}>
                  <p className="article-title">{title}</p>
                </Link>
              </div>
              <p className="comments">
                posted in {topic} by{" "}
                <Link to={`/users/${author}`}>
                  <p>{author}</p>
                </Link>
              </p>

              <VoteChanger
                // className="voter"
                votes={votes}
                value_id={article_id}
                word="articles"
              />

              <Link to={`/articles/${article_id}/comments`}>
                <p>Comments: {comment_count}</p>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ArticleList;
