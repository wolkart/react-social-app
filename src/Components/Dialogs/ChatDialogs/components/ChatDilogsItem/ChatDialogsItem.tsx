import React, { FC } from 'react'
import { StyledChatDialogsItem, StyledStyledChatDialogsMessage, StyledStyledChatDialogsUser } from './styled';

interface PropsType {
  photo: string
  name: string
  message: string
}

export const ChatDialogsItem: FC<PropsType> = (
  {
    photo,
    name,
    message,
  }
) => {
  return (
    <StyledChatDialogsItem>
      <StyledStyledChatDialogsUser>
        <img src={photo} alt={name}/>
        {name}
      </StyledStyledChatDialogsUser>

      <StyledStyledChatDialogsMessage>
        {message}
      </StyledStyledChatDialogsMessage>
    </StyledChatDialogsItem>
  )
}