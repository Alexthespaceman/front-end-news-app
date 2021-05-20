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

  sortArticles = (event) => {
    const query = event.target.value;
    api.getSortedArticles(query).then((articles) => {
      this.setState(articles);
    });
  };

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

    console.log(articles);
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
            created_at,
          } = article;
          return (
            <div key={article_id} className="articles">
              <div className="article-title-div">
                <Link to={`/article/${article_id}`}>
                  <p className="article-title">{title}</p>
                </Link>
              </div>

              <div className="comments">
                <p>
                  posted in {topic} by{" "}
                  <Link to={`/users/${author}`}>
                    <p>{author}</p>
                  </Link>
                  at {created_at}
                </p>
              </div>

              <VoteChanger
                className="voter1"
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
        <section className="nav">
          <h4> sort Articles by : </h4>

          <div className="nav">
            <button value="sort_by=votes" onClick={this.sortArticles}>
              most popular
            </button>
            <button value="?order=desc" onClick={this.sortArticles}>
              Newest
            </button>
            <button value="sort_by=author" onClick={this.sortArticles}>
              Author
            </button>{" "}
          </div>
        </section>
      </div>
    );
  }
}

export default ArticleList;
