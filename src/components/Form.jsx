import React, { Component } from "react";
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
    api.submitComment(article_id, comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="lname">Comment:</label>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.comment}
            id="lname"
            name="lname"
          ></input>
          <br></br>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Form;