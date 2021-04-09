import { Link } from "@reach/router";
import React, { Component } from "react";
import * as api from "../api";

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
        {isLoading ? (
          <p>Loading</p>
        ) : (
          topics.topics.map((topic) => {
            const { slug, description } = topic;
            return (
              <div className="topics2">
                <p>{description}</p>
                <Link to={`/articles/${slug}`}>
                  <button>{slug}</button>
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
