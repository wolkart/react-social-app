import React, { FC } from 'react';
import { InjectedFormProps } from 'redux-form/lib/reduxForm';
import { DialogNewMessageForm } from '../../../pages/Chat/Chat';
import { createField, GetFormKeys, Textarea } from '../../common/Forms/FormsControls';
import { reduxForm } from 'redux-form';
import { StyledChatForm } from './styled';
import { Button } from 'antd';

const ChatForm: FC<InjectedFormProps<DialogNewMessageForm>> = ({ handleSubmit }) => {
  return (
    <StyledChatForm onSubmit={handleSubmit}>
        {createField<GetFormKeys<DialogNewMessageForm>>(
          'Написать сообщение...',
          'newMessage',
          Textarea
        )}
        <Button
          type="primary"
          size='large'
          ghost
        >
          Отправить
        </Button>
    </StyledChatForm>
  )
}

export const ChatFormRedux = reduxForm<DialogNewMessageForm>({ form: 'dialogAddMessageForm' })(ChatForm)