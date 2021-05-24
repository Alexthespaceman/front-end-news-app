import React, { Component } from "react";
import * as api from "../api";
import { default as Loader } from "./Loader";

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
          <Loader />
        ) : (
          <div className="users">
            <p className="user-name">{username}</p>
            <img className="user-img" src={avatar_url} alt="pic"></img>
            <p className="user-name">{name}</p>
          </div>
        )}
      </div>
    );
  }
}

export default IndividualUser;
