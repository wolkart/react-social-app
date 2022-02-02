import React from 'react'
import './Profile.scss'
import {Wallpaper} from "./Wallpaper/Wallpaper";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
    return (
        <div className="Profile">
            <Wallpaper/>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}