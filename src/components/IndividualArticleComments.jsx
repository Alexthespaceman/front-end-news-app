import { Link } from "@reach/router";
import { Component } from "react";
import * as api from "../api";

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
    console.log(comments);
    return (
      <div>
        {isLoading ? (
          <p>loading</p>
        ) : (
          comments.comments.map((comment) => {
            const { comment_id, author, votes, created_at, body } = comment;
            return (
              <div key={comment_id}>
                <Link to="/users/user_id">
                  <p>userName:{author}</p>
                </Link>
                <p>{body}</p>
                <p>comment votes:{votes}</p>
                <p> time: {created_at}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default IndividualArticleComments;
