import { Link } from "@reach/router";
import React from "react";
import { BsFilterLeft } from "react-icons/bs";
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
        <Link to="/topics">
          <BsFilterLeft className="users-btn" />
        </Link>

        <div>
          <Link className="link" to="/jess-jelly">
            <p className="logged-in">
              {" "}
              <CgProfile /> jessjelly
            </p>
          </Link>
        </div>
        <Link to="/users">
          <FaUsers className="users-btn" />
        </Link>
      </header>
    );
  }
}

export default Header;
