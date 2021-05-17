import React from 'react'
import classes from './Dialogs.module.css'
import {DialogItem} from "./DilogsItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = (props) => {
  const dialogItems = props.state.dialogs.map((dialog, i) => <DialogItem key={i} name={dialog.name} id={dialog.id}
                                                                         photo={dialog.photo}/>)
  const messageItems = props.state.messages.map((message, i) => <Message key={i} message={message.message}/>)

  return (
      <div className={classes.Dialogs}>
        <div className={classes.DialogsList}>
          {dialogItems}
        </div>

        <div className={classes.Messages}>
          {messageItems}
        </div>
      </div>
  )
}