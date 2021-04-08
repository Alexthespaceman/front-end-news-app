import React, { Component } from "react";
import * as api from "../api";

class IndividualUser extends Component {
  state = { user: [] };

  componentDidMount() {
    const { username } = this.props;
    api.getUserByUsername(username).then(({ user }) => {
      this.setState({ user: user, isLoading: false });
    });
  }

  render() {
    const { username, avatar_url, name } = this.state.user;
    return (
      <div className="users">
        <p>{username}</p>
        <img className="user-img" src={avatar_url} alt="pic"></img>
        <p>{name}</p>
      </div>
    );
  }
}

export default IndividualUser;
