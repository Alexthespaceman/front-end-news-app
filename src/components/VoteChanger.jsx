import React, { Component } from "react";
import * as api from "../api";
class VoteChanger extends Component {
  state = {
    voteChanges: 0,
    err: null,
  };

  updateVotes = (article_id, increment) => {
    this.setState((currentState) => {
      return {
        voteChanges: currentState.voteChanges + increment,
      };
    });
    api.changeVotes(article_id, increment).catch((err) => {
      this.setState((currentState) => {
        return {
          voteChanges: currentState.voteChanges - increment,
        };
      });
    });
  };

  render() {
    const { article_id, votes } = this.props;

    return (
      <div>
        <button onClick={() => this.updateVotes(article_id, 1)}>up vote</button>
        <p className="votes">Article votes{votes + this.state.voteChanges}</p>
        <button onClick={() => this.updateVotes(article_id, -1)}>
          down vote
        </button>
      </div>
    );
  }
}

export default VoteChanger;
