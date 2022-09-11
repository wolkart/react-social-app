import React from "react";
import './ProfileAva.scss'
import userStub from '../../../assets/images/ava-stub.jpg'

export const ProfileAva = ({image, isOwner, changePhoto}) => {
  const onPhotoSelect = event => {
    if (event.target.files.length) {
      changePhoto(event.target.files[0])
    }
  }
  return(
    <div className="ProfileAva">
      <img src={image|| userStub} alt=""/>
      {isOwner && <label className={'FileUpload'}>
        <input type="file" name='upload' onChange={onPhotoSelect}/>
        <span className={'FileUpload__icon'}>&#128247;</span>
      </label>}
    </div>
  )
}