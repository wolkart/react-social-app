import React, { FC, useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector';
import { Redirect } from 'react-router-dom';
import { StyledChatWrapper } from './styled';
import { ChatDialogs } from '../../Components/Dialogs/ChatDialogs/ChatDialogs';
import { ChatForm } from '../../Components/Dialogs/ChatForm/ChatForm';

export interface MessageType {
  userId: number
  message: string
  userName: string
  photo: string | null
}

const Chat: FC = () => {
  const messagesWS = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
  const [messages, setMessages] = useState<MessageType[]>([])

  const { isAuth, userId } = useAppSelector(state => state.auth)

  useEffect(() => {
    messagesWS.addEventListener('message', e => {
      const newMessages = JSON.parse(e.data)
      setMessages(prevState => [...prevState, ...newMessages])
    })
  }, [])

  const addNewMessage = (newMessage: string) => {
    messagesWS.send(newMessage)
  }

  if (!isAuth) return <Redirect to="/login"/>

  return (
    <StyledChatWrapper>
      <ChatDialogs
        messages={messages}
      />

      <ChatForm
        addNewMessage={addNewMessage}
      />
    </StyledChatWrapper>
  )
}

export default Chat