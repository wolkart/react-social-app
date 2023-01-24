import React, { FC } from 'react'
import { StyledChatDialogsItem, StyledStyledChatDialogsMessage, StyledStyledChatDialogsUser } from './styled';

interface PropsType {
  photo: string
  name: string
  message: string
  id: number
}

export const ChatDialogsItem: FC<PropsType> = (
  {
    photo,
    name,
    message,
    id
  }
) => {
  return (
    <StyledChatDialogsItem>
      <StyledStyledChatDialogsUser>
        <img src={photo} alt=""/>
        {name}
      </StyledStyledChatDialogsUser>

      <StyledStyledChatDialogsMessage>
        {message}
      </StyledStyledChatDialogsMessage>
    </StyledChatDialogsItem>
  )
}