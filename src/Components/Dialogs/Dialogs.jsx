import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`

    return (
        <div className={classes.DialogItem}>
            <NavLink to={path} className={classes.DialogLink} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={classes.MessageItem}>{props.message}</div>
}

export const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Olga'},
        {id: 3, name: 'Fiona'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What is your name?'},
        {id: 3, message: 'Yo'}
    ]

    const dialogItems = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messageItems = messages.map(message => <Message message={message.message}/>)

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