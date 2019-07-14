import React from "react";
import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavMain() {
  return (
    <div className="nav-bar">
      <nav className="nav">
        <div className="nav-side">
          <NavLink activeClassName="is-active" exact to="/home">
            <h1 className="nav-logo">There.</h1>
          </NavLink>
          <NavLink activeClassName="is-active" className="nav-item" to="/articles">My trips</NavLink>
        </div>
        {/* <NavLink activeClassName="is-active"  to="/articles">Disover</NavLink> */}
        <div className="nav-side">
          <NavLink activeClassName="is-active" to="/signin">
            <button className="btn-prems btn-nav">
              My Account
              {/* <FontAwesomeIcon icon="fa-angle-right" className="faAngleRight" /> */}
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