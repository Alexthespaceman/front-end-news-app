import { Link } from "@reach/router";
import React, { Component } from "react";
import { CgProfile } from "react-icons/cg";
import * as api from "../api";
import { default as Loader } from "./Loader";

class Users extends Component {
  state = { user: [] };

  componentDidMount() {
    api.getUsers().then(({ users }) => {
      this.setState({ user: users });
    });
  }

  render() {
    const { user, isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          user
            .filter((user) => {
              return user.username !== "jessjelly";
            })
            .map((user) => {
              const { username, avatar_url, name } = user;
              return (
                <Link className="link" to={`/users/${username}`}>
                  <div className="users">
                    <p className="user-name">
                      {" "}
                      <CgProfile />
                      {username}
                    </p>
                    <p className="user-name">{name}</p>
                    <div>
                      <img
                        className="user-img"
                        src={avatar_url}
                        alt="pic"
                      ></img>
                    </div>
                  </div>
                </Link>
              );
            })
        )}
      </div>
    );
  }
}

export default Users;
