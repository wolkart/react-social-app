import React from 'react'
import classes from './Dialogs.module.css'
import {DialogItem} from "./DilogsItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = (props) => {
  const dialogItems = props.dialogsPage.dialogs.map((dialog, i) => <DialogItem key={i} name={dialog.name} id={dialog.id}
                                                                         photo={dialog.photo}/>)
  const messageItems = props.dialogsPage.messages.map((message, i) => <Message key={i} message={message.message}/>)

  const updateMessageText = (e) => {
    const text = e.target.value
    props.onUpdateMessageText(text)
  }

  const addMessage = () => {
    props.onAddMessage()
  }

  return (
    <div className={classes.Dialogs}>
      <div className={classes.DialogsInner}>
        <div className={classes.DialogsList}>
          {dialogItems}
        </div>

        <div className={classes.Messages}>
          {messageItems}
        </div>
      </div>
      <div className={classes.AddMessage}>
        <textarea onChange={updateMessageText} value={props.dialogsPage.textMessage}/>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  )
}