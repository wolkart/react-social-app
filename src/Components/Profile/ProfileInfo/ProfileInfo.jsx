import React from "react";
import {Preloader} from "../../common/Preloader";
import './ProfileInfo.scss'
import {ProfileAva} from "./ProfileAva";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

export const ProfileInfo = ({profile, status, updateStatus, isOwner, changePhoto}) => {
  if (!profile) return <Preloader/>

  return (
    <div className='ProfileInfo'>
      <div className="ProfileInfo__ava">
        <ProfileAva
          image={profile.photos.large}
          isOwner={isOwner}
          changePhoto={changePhoto}
        />
      </div>
      <div className="ProfileInfo__description">
        <div className="ProfileInfo__name">{profile.fullName}</div>
        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
        />
        <div className="ProfileInfo__about">
          <span className="ProfileInfo__about-label">О себе:</span>
          <span className="ProfileInfo__about-text">{profile.aboutMe}</span>
        </div>
      </div>
    </div>
  )
}