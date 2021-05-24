import React, { Component } from "react";

class LoggedInUser extends Component {
  state = {
    user: {
      username: "jessjelly",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
      name: "Jess Jelly",
    },
  };

  render() {
    const { username, avatar_url, name } = this.state.user;
    return (
      <div className="profile-page">
        <h1>{username}</h1>
        <div className="profile-pic">
          <img src={avatar_url} alt="profile-pic" />
        </div>
        <h2>You're Profile Bio</h2>
        <p>
          Hello, My Name is {name} and I love to Post controversial articles to
          my NC News app and have online debates with people I don't Know!
          Comment on one of my posts and Id love to start a debate with you :){" "}
        </p>
      </div>
    );
  }
}

export default LoggedInUser;
