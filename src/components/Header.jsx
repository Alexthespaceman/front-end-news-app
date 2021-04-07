import { Link } from "@reach/router";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <h1> NC News App </h1>
        </Link>

        <Link to="/users/:user_id">
          <button type="button">Current User</button>
        </Link>
      </header>
    );
  }
}

export default Header;
