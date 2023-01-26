import React, { FC, useEffect, useState } from 'react'
import { StyledChatDialogsItem, StyledStyledChatDialogsMessage, StyledStyledChatDialogsUser } from './styled';
import userStub from '../../../../../assets/images/ava-stub.jpg';
import { NavLink } from 'react-router-dom';
import { MessageType } from '../../../../../pages/Chat/Chat';
import { useAppSelector } from '../../../../../hooks/useAppSelector';

export const ChatDialogsItem: FC<MessageType> = (
  {
    photo,
    userId,
    message,
    userName
  }
) => {
  const [owner, setOwner] = useState(false)
  const {userId: ownerId} = useAppSelector(state => state.auth)

  useEffect(() => {
    setOwner(ownerId === userId)
  }, [userId])

  return (
    <StyledChatDialogsItem owner={owner}>
      <StyledStyledChatDialogsUser>
        <NavLink to={`profile/${!owner ? userId : ''}`}>
          <img src={photo || userStub} alt={userName}/>
          {userName}
        </NavLink>
      </StyledStyledChatDialogsUser>

      <StyledStyledChatDialogsMessage owner={owner}>
        {message}
      </StyledStyledChatDialogsMessage>
    </StyledChatDialogsItem>
  )
}