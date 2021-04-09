import React, { Component } from "react";
import * as api from "../api";

class IndividualUser extends Component {
  state = { user: [], isLoading: true };

  componentDidMount() {
    const { username } = this.props;
    api.getUserByUsername(username).then(({ user }) => {
      this.setState({ user: user, isLoading: false });
    });
  }

  render() {
    const { username, avatar_url, name } = this.state.user;
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <p>loading</p>
        ) : (
          <div className="users">
            <p>{username}</p>
            <img className="user-img" src={avatar_url} alt="pic"></img>
            <p>{name}</p>
          </div>
        )}
      </div>
    );
  }
}

export default IndividualUser;
