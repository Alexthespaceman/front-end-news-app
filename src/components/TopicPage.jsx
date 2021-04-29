import { Link } from "@reach/router";
import React, { Component } from "react";
import * as api from "../api";
import ErrorDisplayer from "./ErrorDisplayer";
import Loader from "./Loader";

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
          const {
            author,
            title,
            topic,
            votes,
            comment_count,
            article_id,
          } = article;
          return (
            <div className="topic-article" key={article_id}>
              <Link to={`/article/${article_id}`}>
                <p>Article Title{title}</p>
              </Link>

              <p>user:{author}</p>
              <p>Topic:{topic}</p>
              <p>Votes{votes}</p>
              <p>Comment Count:{comment_count}</p>
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
