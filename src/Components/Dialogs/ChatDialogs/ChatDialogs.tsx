import React, { FC } from 'react';
import { StyledChatDialogs, StyledChatDialogsInner } from './styled';
import { ChatDialogsItem } from './components/ChatDilogsItem/ChatDialogsItem';
import { Space } from 'antd';
import { DialogType, MessageType } from '../../../redux/chatReducer';

interface PropsType {
  dialogs: DialogType[]
  messages: MessageType[]
}

export const ChatDialogs: FC<PropsType> = ({ dialogs }) => {
  return (
    <StyledChatDialogs>
      <StyledChatDialogsInner>
        <Space direction="vertical" size="large">
          {dialogs.map((dialog) =>
            <ChatDialogsItem
              key={dialog.id}
              name={dialog.name}
              photo={dialog.photo}
              message={'Example text message Example text message Example text message Example text message Example text message Example text message Example text message'}
            />
          )}
        </Space>
      </StyledChatDialogsInner>
    </StyledChatDialogs>
  )
}