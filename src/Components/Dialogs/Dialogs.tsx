import React, {FC} from 'react'
import {DialogItem} from "./DilogsItem/DialogItem";
import {Message} from "./Message/Message";
import {actions} from "../../redux/dialogsReducer";
import {AddMessageFormRedux} from "../Forms/AddMessageForm";
import './Dialogs.scss'
import {useAppSelector} from "../../hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";

export type DialogNewMessageForm = {
    newMessage: string
}

const Dialogs: FC = () => {
    const {dialogs, messages} = useAppSelector(state => state.dialogsPage)
    const {isAuth} = useAppSelector(state => state.auth)
    const dispatch = useDispatch()

    const addNewMessage = (values: DialogNewMessageForm) => {
        dispatch(actions.sendMessage(values.newMessage))
    }

    if (!isAuth) return <Redirect to='/login'/>

    return (
        <div className='Dialogs'>
            <div className='DialogsInner'>
                <div className='DialogsList'>
                    {dialogs.map((dialog) =>
                        <DialogItem
                            key={dialog.id}
                            id={dialog.id}
                            name={dialog.name}
                            photo={dialog.photo}
                        />
                    )}
                </div>

                <div className='Messages'>
                    {messages.map((message) =>
                        <Message
                            key={message.id}
                            message={message.message}
                        />
                    )}
                </div>
            </div>

            <div className='AddMessage'>
                <AddMessageFormRedux
                    onSubmit={addNewMessage}
                />
            </div>
        </div>
    )
}

export default Dialogs