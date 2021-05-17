import React from 'react'
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`
  return (
      <div className={classes.DialogItem}>
        <NavLink to={path} className={classes.DialogLink} activeClassName={classes.active}>
          <div className={classes.DialogAvatar}>
            <img src={props.photo} alt=""/>
          </div>
          {props.name}
        </NavLink>
      </div>
  )
}