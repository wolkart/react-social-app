import React, {FC} from 'react'
import './Nav.scss'
import {NavLink} from "react-router-dom";

export const Nav: FC = () => {
  return (
    <nav className="Nav">
      <div className="Nav__item">
        <NavLink to="/profile" className="Nav__link">Профиль</NavLink>
      </div>
      <div className="Nav__item">
        <NavLink to="/dialogs" className="Nav__link">Сообщения</NavLink>
      </div>
      <div className="Nav__item">
        <NavLink to="/users" className="Nav__link">Пользователи</NavLink>
      </div>
      <div className="Nav__item">
        <NavLink to="/music" className="Nav__link">Музыка</NavLink>
      </div>
    </nav>
  )
}