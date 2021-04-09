import { Link } from "@reach/router";
import { Component } from "react";
import * as api from "../api";
import VoteChanger from "./VoteChanger";

class SortByAuthor extends Component {
  state = { articles: [] };

  componentDidMount() {
    const { word } = this.props;
    api.sortBy(word).then((data) => {
      this.setState({ articles: data.articles, isLoading: false });
    });
  }

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

export default SortByAuthor;
