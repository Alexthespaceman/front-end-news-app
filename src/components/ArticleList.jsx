import { Link } from "@reach/router";
import { Component } from "react";
import * as api from "../api";
import VoteChanger from "./VoteChanger";

class ArticleList extends Component {
  state = { articles: [], isLoading: true };

  componentDidMount() {
    api.getAllArticles().then(({ articles }) => {
      this.setState({ articles: articles, isLoading: false });
    });
  }

  // componentDidUpdate(previousProps, previousState) {
  //   const { article } = this.props;
  //   if (article !== previousProps.article) {
  //     api.getAllArticles(article);
  //   }
  // }

  // upVote = () => {
  //   console.log("invoked");
  //   this.setState((prevState) => {
  //     return { articles: prevState.votes + 1 };
  //   });
  //   console.log(this.state.votes);
  // };

  // downVote = (article_id, votes) => {};

  render() {
    const { articles } = this.state;
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
              <Link to={`/article/${article_id}`}>
                <p>{title}</p>
              </Link>

              <p>
                posted in {topic} by{" "}
                <Link to={`/users/${author}`}>
                  <p>{author}</p>
                </Link>
              </p>

              <VoteChanger
                votes={votes}
                value_id={article_id}
                word="articles"
              />
              <p>comments:{comment_count}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ArticleList;
