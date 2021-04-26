import React from 'react'
import './Profile.scss'
import {MyPosts} from "./MyPosts/MyPosts";
import {Wallpaper} from "./Wallpaper/Wallpaper";

export const Profile = () => {
  return (
      <div className="Profile">
        <Wallpaper/>
        <MyPosts/>
      </div>
  )
}