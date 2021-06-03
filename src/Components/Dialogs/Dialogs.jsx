import React from 'react'
import classes from './Dialogs.module.css'
import {DialogItem} from "./DilogsItem/DialogItem";
import {Message} from "./Message/Message";
import {addMessageActionCreator, updateTextMessageActionCreator} from "../../redux/dialogsReducer";

export const Dialogs = (props) => {
  const dialogItems = props.state.dialogs.map((dialog, i) => <DialogItem key={i} name={dialog.name} id={dialog.id}
                                                                         photo={dialog.photo}/>)
  const messageItems = props.state.messages.map((message, i) => <Message key={i} message={message.message}/>)

  const updateMessageText = (e) => {
    const text = e.target.value

    props.dispatch(updateTextMessageActionCreator(text))
  }

  const addMessage = () => {
    props.dispatch(addMessageActionCreator())
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
        <textarea onChange={updateMessageText} value={props.state.textMessage}/>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  )
}