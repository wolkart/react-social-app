import React, { ChangeEvent, FC, useState } from 'react';
import { StyledChatForm } from './styled';
import { Button, Input } from 'antd';
import { SendOutlined } from '@ant-design/icons';

const { TextArea } = Input;

interface PropsType {
  addNewMessage: (newMessage: string) => void
}

export const ChatForm: FC<PropsType> = ({ addNewMessage }) => {
  const [message, setMessage] = useState('')

  const sendMessage = () => {
    addNewMessage(message)
    setMessage('')
  }

  return (
    <StyledChatForm>
      <TextArea
        placeholder="Написать сообщение..."
        autoSize={{ minRows: 2, maxRows: 6 }}
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <Button
        type="primary"
        size="large"
        icon={<SendOutlined/>}
        style={{height: '54px'}}
        onClick={sendMessage}
      >
        Отправить
      </Button>
    </StyledChatForm>
  )
}