import { Link } from "@reach/router";
import { Component } from "react";
import * as api from "../api";
import ErrorDisplayer from "./ErrorDisplayer";
import Form from "./Form";
import Loader from "./Loader";
import VoteChanger from "./VoteChanger";

class IndividualArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    const { article_id } = this.props;
    api
      .getCommentsByArticleId(article_id)
      .then((comments) => {
        this.setState({ comments: comments, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err, isLoading: false });
      });
  }

  addComment = (value) => {
    this.setState((currentState) => {
      return {
        comments: [value, ...currentState.comments],
      };
    });
  };

  delComment = (comment_id) => {
    api.delCommentById(comment_id).then(() => {
      this.setState((currentState) => {
        const updatedComments = currentState.comments.filter((comment) => {
          return comment.comment_id !== comment_id;
        });
        return { comments: updatedComments };
      });
    });
  };

  render() {
    const { comments, isLoading, err } = this.state;

    if (isLoading) {
      return <Loader />;
    }
    if (err) {
      const { response } = err;
      console.log(response);
      return (
        <ErrorDisplayer status={response.status} msg={response.data.msg} />
      );
    }

    return (
      <div>
        <Form addComment={this.addComment} article_id={this.props.article_id} />
        {comments.map((comment) => {
          const { comment_id, author, votes, created_at, body } = comment;
          return (
            <div className="comments" key={comment_id}>
              <Link to={`/users/${author}`}>
                <p>User name: {author}</p>
              </Link>
              <p>{body}</p>

              <p> time: {created_at}</p>
              {author === "jessjelly" ? (
                <button onClick={() => this.delComment(comment_id)}>
                  delete comment
                </button>
              ) : (
                <VoteChanger
                  votes={votes}
                  word="comments"
                  value_id={comment_id}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default IndividualArticleComments;
