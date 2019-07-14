import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavMain() {
  return (
    <div className="nav-bar">
      <nav className="nav">
        <div className="nav-side">
          <NavLink activeClassName="is-active" exact to="/home">
            <h1 className="nav-logo">There.</h1>
          </NavLink>
        </div>
        <div className="nav-side">
          <NavLink activeClassName="is-active" className="nav-item" to="/articles">Articles</NavLink>
          <NavLink activeClassName="is-active" className="nav-item" to="/about">About</NavLink>
          <NavLink activeClassName="is-active" className="nav-item" to="/vides">Videos</NavLink>

          <NavLink activeClassName="is-active" to="/signin">
            <button className="btn-nav">
              My Account
              <FontAwesomeIcon icon="angle-right" className="arrow-btn" />
            </button>
          </NavLink>
          {/* <NavLink activeClassName="is-active" to="/profile"></NavLink><FontAwesomeIcon icon="user-circle" className="faHeart" /> */}
        </div>

        {/* <NavLink activeClassName="is-active"  to="/profile">Favorites</NavLink> */}
        {/* <NavLink activeClassName="is-active"  to="/sign-in">Sign in</NavLink> */}
      </nav>
    </div>
  )
}

export default NavMain;