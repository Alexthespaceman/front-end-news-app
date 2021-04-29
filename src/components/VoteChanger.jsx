import React, { Component } from "react";
import * as api from "../api";

class VoteChanger extends Component {
  state = {
    voteChanges: 0,
    err: null,
  };

  updateVotes = (value_id, increment, word) => {
    this.setState((currentState) => {
      return {
        voteChanges: currentState.voteChanges + increment,
      };
    });
    api.changeVotes(value_id, increment, word).catch((err) => {
      this.setState((currentState) => {
        return {
          voteChanges: currentState.voteChanges - increment,
        };
      });
    });
  };

  render() {
    const { value_id, votes, word } = this.props;

    return (
      <div className="voter">
        <button
          className="vote-button"
          onClick={() => this.updateVotes(value_id, 1, word)}
        >
          up vote
        </button>
        <p>
          {word} votes: {votes + this.state.voteChanges}
        </p>
        <button
          className="vote-button"
          onClick={() => this.updateVotes(value_id, -1, word)}
        >
          down vote
        </button>
      </div>
    );
  }
}

export default VoteChanger;
