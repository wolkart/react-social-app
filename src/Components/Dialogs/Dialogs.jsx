import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
  return (
      <div className={classes.Dialogs}>
        <div className={classes.DialogsList}>
          <div className={classes.DialogItem}>
            <NavLink to='/dialogs/1' className={classes.DialogLink} activeClassName={classes.active}>Artem</NavLink>
          </div>
          <div className={classes.DialogItem}>
            <NavLink to='/dialogs/2' className={classes.DialogLink} activeClassName={classes.active}>Olga</NavLink>
          </div>
          <div className={classes.DialogItem}>
            <NavLink to='/dialogs/3' className={classes.DialogLink} activeClassName={classes.active}>Fiona</NavLink>
          </div>
        </div>
        <div className={classes.Messages}>
          <div className={classes.MessageItem}>Hi</div>
          <div className={classes.MessageItem}>What is your name?</div>
          <div className={classes.MessageItem}>Yo</div>
        </div>
      </div>
  )
}