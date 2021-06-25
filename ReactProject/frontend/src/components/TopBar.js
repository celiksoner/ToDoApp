import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopBar extends Component {
  render() {
    const { t, isLoggedIn, username, onLogoutSuccess } = this.props;

    let links = (
      <ul className="navbar-nav ms-auto">
        <li>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/signup">
            Sign Up
          </Link>
        </li>
      </ul>
    );
    if (isLoggedIn) {
      links = (
        <ul className="navbar-nav ms-auto">
          <Link className="nav-link" to={`/user/${username}`}>
            {username}
          </Link>

          <li
            className="nav-link"
            onClick={onLogoutSuccess}
            style={{ cursor: "pointer" }}
          >
            Log out
          </li>
        </ul>
      );
    }

    return (
      <div className="shadow-sm bg-dark mb-3">
        <nav className="navbar navbar-dark bg-dark container navbar-expand">
          <Link className="navbar-brand" to="/">
            ToDoApp
          </Link>
          {links}
        </nav>
      </div>
    );
  }
}

export default TopBar;
