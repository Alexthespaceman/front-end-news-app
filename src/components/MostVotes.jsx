import { Link } from "@reach/router";
import React, { Component } from "react";
import * as api from "../api";
import VoteChanger from "./VoteChanger";

class MostVotes extends Component {
  state = { articles: [], isLoading: true };

  componentDidMount() {
    const { word } = this.props;
    api.sortBy(word).then((data) => {
      this.setState({ articles: data.articles, isLoading: false });
    });
  }

  render() {
    const { articles, isLoading } = this.state;

    return (
      <div>
        {isLoading ? (
          <p>loading</p>
        ) : (
          articles.map((article) => {
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
          })
        )}
      </div>
    );
  }
}

export default MostVotes;
