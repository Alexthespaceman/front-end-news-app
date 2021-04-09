import { Link } from "@reach/router";
import { Component } from "react";
import * as api from "../api";
import VoteChanger from "./VoteChanger";

class IndividualArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.getCommentsByArticleId(article_id).then(({ comments }) => {
      this.setState({ comments: comments, isLoading: false });
    });
  }

  render() {
    const { comments, isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <p>loading</p>
        ) : (
          comments.comments.map((comment) => {
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
                  word="articles"
                  value_id={comment_id}
                />
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default IndividualArticleComments;
