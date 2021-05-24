import { Link } from "@reach/router";
import React, { Component } from "react";
import * as api from "../api";
import { default as Loader } from "./Loader";

class Topics extends Component {
  state = { topics: [], isLoading: true };

  componentDidMount() {
    api.getTopics().then((topic) => {
      this.setState({ topics: topic, isLoading: false });
    });
  }

  render() {
    const { topics, isLoading } = this.state;

    return (
      <div>
        <h1 className="topics-h1">Filter Articles from the Topics below</h1>
        {isLoading ? (
          <Loader />
        ) : (
          topics.topics.map((topic) => {
            const { slug, description } = topic;
            return (
              <div className="articles">
                <p className="article-des-div">{description}</p>
                <Link to={`/articles/${slug}`}>
                  <button className="button">{slug}</button>
                </Link>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default Topics;
