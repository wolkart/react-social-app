import React from 'react'
import './Profile.scss'
import {MyPosts} from "./MyPosts/MyPosts";
import {Wallpaper} from "./Wallpaper/Wallpaper";
import {UserInfo} from "./UserInfo/UserInfo";

export const Profile = () => {
    return (
        <div className="Profile">
            <Wallpaper/>
            <UserInfo/>
            <MyPosts/>
        </div>
    )
}