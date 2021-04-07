import { Link } from "@reach/router";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/articles">
          <button type="button">Home</button>
        </Link>
        <h1> NC News</h1>
        <Link to="/users/:user_id">
          <button type="button">Current User</button>
        </Link>
      </header>
    );
  }
}

export default Header;
