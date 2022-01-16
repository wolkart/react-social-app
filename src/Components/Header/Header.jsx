import React from 'react'
import './Header.scss'
import {NavLink} from "react-router-dom";
import './Header-login.scss'

export const Header = (props) => {
  return <header className="Header">
    <div className="Container">
      <div className="Header__inner">
        <NavLink to={'/'} className="Logo">
          <span className="Logo__image">
            <img src="https://bumper-stickers.ru/35276-thickbox_default/volk-iz-multfilma-jil-byl-pes.jpg" alt="Wolf social"/>
          </span>
          <span className="Logo__name">Заходи, если что...</span>
        </NavLink>
        <div className="Header-login">
          {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </div>
    </div>
  </header>
}