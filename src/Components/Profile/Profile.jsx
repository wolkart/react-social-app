import React from 'react'
import './Profile.scss'
import {MyPosts} from "./MyPosts/MyPosts";
import {Wallpaper} from "./Wallpaper/Wallpaper";
import {UserInfo} from "./UserInfo/UserInfo";

export const Profile = (props) => {
    return (
        <div className="Profile">
            <Wallpaper/>
            <UserInfo/>
            <MyPosts state={props.state} addPost={props.addPost}/>
        </div>
    )
}