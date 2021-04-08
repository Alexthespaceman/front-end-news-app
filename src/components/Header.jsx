import { Link } from "@reach/router";
import React from "react";

class Header extends React.Component {
  state = {};

  render() {
    return (
      <header className="header">
        <Link to="/">
          <h1> NC News App </h1>
        </Link>

        <Link to="/users">
          <button type="button">Users</button>
        </Link>
      </header>
    );
  }
}

export default Header;
