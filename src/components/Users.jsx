import React, { Component } from "react";
import * as api from "../api";
class Users extends Component {
  state = { user: [] };

  componentDidMount() {
    api.getUsers().then(({ users }) => {
      this.setState({ user: users });
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        {user.map((user) => {
          const { username, avatar_url } = user;
          return (
            <div className="users">
              <p>{username}</p>
              <img className="user-img" src={avatar_url} alt="pic"></img>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
