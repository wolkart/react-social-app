import React from 'react'
import './Profile.scss'
import {Wallpaper} from "./Wallpaper/Wallpaper";
import {UserInfo} from "./UserInfo/UserInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile = (props) => {
  return (
    <div className="Profile">
      <Wallpaper/>
      <UserInfo/>
      <MyPostsContainer store={props.store}/>
    </div>
  )
}