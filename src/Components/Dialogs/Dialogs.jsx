import React from 'react'
import classes from './Dialogs.module.css'
import {DialogItem} from "./DilogsItem/DialogItem";
import {Message} from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/Forms/FormsControls";
import {maxLength, required} from "../../utils/validators/validators";

export const Dialogs = (props) => {
  const dialogItems = props.dialogsPage.dialogs.map((dialog, i) => <DialogItem key={i} name={dialog.name} id={dialog.id}
                                                                               photo={dialog.photo}/>)
  const messageItems = props.dialogsPage.messages.map((message, i) => <Message key={i} message={message.message}/>)

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
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
        <AddMessageFormRedux
          onSubmit={addNewMessage}
        />
      </div>
    </div>
  )
}

const maxLength100 = maxLength(100)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name='newMessageBody'
        placeholder='Enter new message'
        validate={[required, maxLength100]}
      />
      <button>Add message</button>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)