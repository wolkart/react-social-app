import React, { FC } from 'react';
import { InjectedFormProps } from 'redux-form/lib/reduxForm';
import { DialogNewMessageForm } from '../../../pages/Chat/Chat';
import { maxLength, required } from '../../../utils/validators/validators';
import { createField, GetFormKeys, Textarea } from '../../common/Forms/FormsControls';
import { reduxForm } from 'redux-form';
import { StyledChatForm } from './styled';
import { Button, Space } from 'antd';

const maxLength100 = maxLength(100)

const ChatForm: FC<InjectedFormProps<DialogNewMessageForm>> = ({ handleSubmit }) => {
  return (
    <StyledChatForm onSubmit={handleSubmit}>
        {createField<GetFormKeys<DialogNewMessageForm>>(
          'Enter new message',
          'newMessage',
          Textarea,
          [required, maxLength100]
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