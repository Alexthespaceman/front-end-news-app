import { Link } from "@reach/router";
import { Component } from "react";
import * as api from "../api";
import Form from "./Form";
import VoteChanger from "./VoteChanger";

class IndividualArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.getCommentsByArticleId(article_id).then((comments) => {
      this.setState({ comments: comments, isLoading: false });
    });
  }

  addComment = (value) => {
    this.setState((currentState) => {
      return { comments: [...currentState.comments, value] };
    });
  };

  render() {
    const { comments, isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <p>loading</p>
        ) : (
          comments.map((comment) => {
            const { comment_id, author, votes, created_at, body } = comment;
            return (
              <div className="comments" key={comment_id}>
                <Link to={`/users/${author}`}>
                  <p>User name: {author}</p>
                </Link>
                <p>{body}</p>
                <p>comment votes:{votes}</p>
                <p> time: {created_at}</p>
                <VoteChanger
                  votes={votes}
                  word="comments"
                  value_id={comment_id}
                />
              </div>
            );
          })
        )}
        <div>
          {" "}
          <Form
            addComment={this.addComment}
            article_id={this.props.article_id}
          />
        </div>
      </div>
    );
  }
}

export default IndividualArticleComments;
