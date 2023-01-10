import React, {ChangeEvent, FC} from "react";
import userStub from '../../../../../assets/images/ava-stub.jpg'
import {changePhoto} from "../../../../../redux/profileReducer";
import {useDispatch} from "react-redux";
import { StyledProfiledAvatar } from "../styled";

type PropsType = {
  image: string | null
  isOwner: boolean
}

export const ProfileAva: FC<PropsType> = ({image, isOwner}) => {
  const dispatch = useDispatch()

  const onPhotoSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      dispatch(changePhoto(event.target.files[0]))
    }
  }

  return(
    <StyledProfiledAvatar>
      <img src={image|| userStub} alt=""/>
      {isOwner && <label className={'FileUpload'}>
        <input type="file" name='upload' onChange={onPhotoSelect}/>
        <span className={'FileUpload__icon'}>&#128247;</span>
      </label>}
    </StyledProfiledAvatar>
  )
}