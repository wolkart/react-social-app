import React from "react";
import {Preloader} from "../../common/Preloader";
import './ProfileInfo.scss'
import {ProfileAva} from "./ProfileAva";
import {ProfileStatus} from "./ProfileStatus";

export const ProfileInfo = (props) => {
  if (!props.profile) return <Preloader/>

  return(
    <div className='ProfileInfo'>
      <div className="ProfileInfo__ava">
        <ProfileAva image={props.profile.photos.large}/>
      </div>
      <div className="ProfileInfo__description">
        <div className="ProfileInfo__name">{props.profile.fullName}</div>
        <ProfileStatus/>
        <div className="ProfileInfo__about">
          <span className="ProfileInfo__about-label">О себе:</span>
          <span className="ProfileInfo__about-text">{props.profile.aboutMe}</span>
        </div>
      </div>
    </div>
  )
}