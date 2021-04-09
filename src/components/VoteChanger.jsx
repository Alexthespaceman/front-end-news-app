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
      <div>
        <button onClick={() => this.updateVotes(value_id, 1, word)}>
          up vote
        </button>
        <p className="votes">
          {word} votes: {votes + this.state.voteChanges}
        </p>
        <button onClick={() => this.updateVotes(value_id, -1, word)}>
          down vote
        </button>
      </div>
    );
  }
}

export default VoteChanger;
