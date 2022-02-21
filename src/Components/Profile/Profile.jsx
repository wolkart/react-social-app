import React from 'react'
import './Profile.scss'
import {Wallpaper} from "./Wallpaper/Wallpaper";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = ({profile, status, updateStatus, isOwner, changePhoto, saveProfile}) => {
  return (
    <div className="Profile">
      <Wallpaper/>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        isOwner={isOwner}
        changePhoto={changePhoto}
        saveProfile={saveProfile}
      />
      <MyPostsContainer/>
    </div>
  )
}