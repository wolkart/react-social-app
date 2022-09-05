import React, {FC} from 'react'
import {DialogItem} from "./DilogsItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/dialogsReducer";
import {AddMessageFormRedux} from "../Forms/AddMessageForm";
import './Dialogs.scss'

type PropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    sendMessage: (payload: string) => void
}

export type DialogNewMessageForm = {
    newMessage: string
}

export const Dialogs: FC<PropsType> =
    ({
         dialogs,
         messages,
         sendMessage
     }) => {

        const addNewMessage = (values: DialogNewMessageForm) => {
            sendMessage(values.newMessage)
        }

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