import React, { Component } from "react";
import { FaComment } from "react-icons/fa";
import * as api from "../api";

class Form extends Component {
  state = { comment: "" };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ comment: value });
  };

  handleSubmit = (submitEvent) => {
    const { article_id } = this.props;
    const { comment } = this.state;
    submitEvent.preventDefault();
    api.submitComment(article_id, comment).then((newComment) => {
      this.props.addComment(newComment);
    });
    this.setState({ comment: "" });
  };

  render() {
    console.log(this.state);
    return (
      <div className="comment-section">
        <form onSubmit={this.handleSubmit}>
          <label className="form-name" htmlFor="lname">
            Add a comment:
          </label>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.comment}
            id="lname"
            name="lname"
          ></input>
          <br></br>
          <button type="submit" className="sub-butt">
            <FaComment className="del-butt" />
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
