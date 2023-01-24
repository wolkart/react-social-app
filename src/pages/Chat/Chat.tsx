import React, { FC } from 'react'
import { actions } from '../../redux/chatReducer';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { StyledChatWrapper } from './styled';
import { ChatDialogs } from '../../Components/Dialogs/ChatDialogs/ChatDialogs';
import { ChatFormRedux } from '../../Components/Dialogs/ChatForm/ChatForm';

export type DialogNewMessageForm = {
  newMessage: string
}

const Chat: FC = () => {
  const { dialogs, messages } = useAppSelector(state => state.chat)
  const { isAuth } = useAppSelector(state => state.auth)
  const dispatch = useDispatch()

  const addNewMessage = (values: DialogNewMessageForm) => {
    dispatch(actions.sendMessage(values.newMessage))
  }

  if (!isAuth) return <Redirect to="/login"/>

  return (
    <StyledChatWrapper>
      <ChatDialogs dialogs={dialogs} messages={messages}/>

      <ChatFormRedux
        onSubmit={addNewMessage}
      />
    </StyledChatWrapper>
  )
}

export default Chat