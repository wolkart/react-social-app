import React from 'react'
import './Nav.scss'
import {NavLink} from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="Nav">
      <div className="Nav__item">
        <NavLink to="/profile" className="Nav__link">Profile</NavLink>
      </div>
      <div className="Nav__item">
        <NavLink to="/dialogs" className="Nav__link">Messages</NavLink>
      </div>
      <div className="Nav__item">
        <NavLink to="/users" className="Nav__link">Users</NavLink>
      </div>
      <div className="Nav__item">
        <NavLink to="/music" className="Nav__link">Music</NavLink>
      </div>
    </nav>
  )
}