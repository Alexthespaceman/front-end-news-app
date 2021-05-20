import React, { Component } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
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
        {/* <button
          className="vote-button"
          onClick={() => this.updateVotes(value_id, 1, word)}
        > */}
        <FaThumbsUp
          className="vote-button"
          onClick={() => this.updateVotes(value_id, 1, word)}
        />
        <p className="vote-button">votes: {votes + this.state.voteChanges}</p>
        <FaThumbsDown
          className="vote-button"
          onClick={() => this.updateVotes(value_id, -1, word)}
        />
        {/* <button
          className="vote-button"
          onClick={() => this.updateVotes(value_id, -1, word)}
        >
          down vote
        </button> */}
      </div>
    );
  }
}

export default VoteChanger;
