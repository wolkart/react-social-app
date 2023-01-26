import React, { FC, useEffect, useRef } from 'react';
import { StyledChatDialogs, StyledChatDialogsInner } from './styled';
import { ChatDialogsItem } from './components/ChatDilogsItem/ChatDialogsItem';
import { Space } from 'antd';
import { MessageType } from '../../../pages/Chat/Chat';

interface PropType {
  messages: MessageType[]
}

export const ChatDialogs: FC<PropType> = ({messages}) => {
  const dialogsContainer = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (dialogsContainer.current) {
      dialogsContainer.current.scrollTop = dialogsContainer.current.scrollHeight
    }
  }, [messages])

  return (
    <StyledChatDialogs>
      <StyledChatDialogsInner ref={dialogsContainer}>
        <Space direction="vertical" size="large">
          {messages.map((message, index) =>
            <ChatDialogsItem
              key={index}
              userName={message.userName}
              photo={message.photo}
              message={message.message}
              userId={message.userId}
            />
          )}
        </Space>
      </StyledChatDialogsInner>
    </StyledChatDialogs>
  )
}