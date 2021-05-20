import { Link } from "@reach/router";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import image from "../images/northcoders.png";

class Header extends React.Component {
  state = {};

  render() {
    return (
      <header className="header">
        <Link to="/">
          <img className="logo" src={image} alt="logo" />
        </Link>
        <div>
          <p className="logged-in">
            {" "}
            <CgProfile /> jessjelly
          </p>
        </div>

        <Link to="/users">
          <FaUsers className="users-btn" />
        </Link>
      </header>
    );
  }
}

export default Header;
