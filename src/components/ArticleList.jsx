import { Link } from "@reach/router";
import { Component } from "react";
import { FaClock, FaComments, FaThumbsUp, FaUser } from "react-icons/fa";
import * as api from "../api";
import { default as ErrorDisplayer } from "./ErrorDisplayer";
import { default as Loader } from "./Loader";
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
                <Link className="link" to={`/article/${article_id}`}>
                  <p className="article-title">{title}</p>
                </Link>
              </div>

              <VoteChanger
                className="voter1"
                votes={votes}
                value_id={article_id}
                word="articles"
              />

              <Link className="link" to={`/articles/${article_id}/comments`}>
                <p>
                  <FaComments /> {comment_count}
                </p>
              </Link>

              <div className="comments">
                <p className="comments-child">
                  posted in {topic} on {new Date(created_at).toDateString()} by
                  .
                  <Link className="link" to={`/users/${author}`}>
                    {author}
                  </Link>
                </p>
              </div>
            </div>
          );
        })}
        <section className="nav">
          <h4> sort Articles by : </h4>

          <div className="sort-by-buttons">
            <button
              className="button1"
              value="sort_by=votes"
              onClick={this.sortArticles}
            >
              <FaThumbsUp />
            </button>
            <button
              className="button2"
              value="?order=desc"
              onClick={this.sortArticles}
            >
              <FaClock />
            </button>
            <button
              className="button3"
              value="sort_by=author"
              onClick={this.sortArticles}
            >
              <FaUser />
            </button>{" "}
          </div>
        </section>
      </div>
    );
  }
}

export default ArticleList;
