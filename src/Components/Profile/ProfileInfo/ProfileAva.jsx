import React from "react";
import './ProfileAva.scss'
import userStub from '../../../assets/images/ava-stub.jpg'

export const ProfileAva = (props) => {
  return(
    <div className="ProfileAva">
      <img src={props.image ? props.image : userStub} alt=""/>
    </div>
  )
}