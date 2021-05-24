import { Link } from "@reach/router";
import React, { Component } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { FaComments, FaThumbsUp, FaUser } from "react-icons/fa";
import * as api from "../api";
import ErrorDisplayer from "./ErrorDisplayer";
import { default as Loader } from "./Loader";

class TopicPage extends Component {
  state = { articles: [], isLoading: true, err: null };

  componentDidMount() {
    const { slug } = this.props;

    api
      .getTopicByQuery(slug)
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
          const { author, title, topic, votes, comment_count, article_id } =
            article;
          return (
            <div className="articles" key={article_id}>
              <Link className="link" to={`/article/${article_id}`}>
                <p className="topics-title">Article Title{title}</p>
              </Link>

              <Link to={`/users/${author}`}>
                <p className="filteres-btn">
                  <FaUser /> {author}
                </p>
              </Link>
              <p className="filteres-btn">
                <BsFilterLeft />
                {topic}
              </p>
              <p className="filteres-btn">
                <FaThumbsUp />
                {votes}
              </p>
              <Link to={`/articles/${article_id}/comments`}>
                <p className="filteres-btn">
                  <FaComments /> {comment_count}
                </p>
              </Link>
            </div>
          );
        })}
        )
      </div>
    );
  }
}

export default TopicPage;
// {isLoading ? (
//   <p>loading</p>
// ) : (
//   articles.articles.map((article) => {
//     const {
//       author,
//       title,
//       topic,
//       votes,
//       comment_count,
//       article_id,
//     } = article;
//     return (
//       <div className="comments" key={article_id}>
//         <p>comment votes:{votes}</p>
//         <p>hello</p>
//         <p>{author}</p>
//         <p>{title}</p>
//         <p>{topic}</p>
//         <p>{comment_count}</p>
//       </div>
//     );
//   })
// )}
