import React from 'react'
import '../Dialogs.scss'
import {NavLink} from "react-router-dom";

export const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`
  return (
      <div className='DialogItem'>
        <NavLink to={path} className='DialogLink' activeClassName='active'>
          <div className='DialogAvatar'>
            <img src={props.photo} alt=""/>
          </div>
          {props.name}
        </NavLink>
      </div>
  )
}