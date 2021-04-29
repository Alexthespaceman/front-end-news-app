import { Link } from "@reach/router";
import React from "react";

class Header extends React.Component {
  state = {};

  render() {
    return (
      <header className="header">
        <Link className="link1" to="/">
          <h1 className="title"> NC News App </h1>
        </Link>

        <Link to="/users">
          <button className="users-btn" type="button">
            Users
          </button>
        </Link>
      </header>
    );
  }
}

export default Header;
