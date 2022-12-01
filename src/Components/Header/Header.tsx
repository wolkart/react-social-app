import React, {FC} from 'react'
import './Header.scss'
import {NavLink} from "react-router-dom";
import './Header-login.scss'

type PropsType = {
  isAuth: boolean
  login: string | null
  logout: () => void
}

export const Header: FC<PropsType> = (props) => {
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
          {props.isAuth
            ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
            : <NavLink to={'/login'}>Log in</NavLink>}
        </div>
      </div>
    </div>
  </header>
}