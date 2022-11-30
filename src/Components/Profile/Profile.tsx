import React, {FC} from 'react'
import './Profile.scss'
import {Wallpaper} from "./Wallpaper/Wallpaper";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePropsType} from "./ProfileContainer";

export const Profile: FC<ProfilePropsType> = (
    {
        profile,
        status,
        updateUserStatus,
        isOwner,
        changePhoto,
        saveProfile
    }) => {
    return (
        <div className="Profile">
            <Wallpaper/>
            <ProfileInfo
                profile={profile}
                status={status}
                updateUserStatus={updateUserStatus}
                isOwner={isOwner}
                changePhoto={changePhoto}
                saveProfile={saveProfile}
            />
            <MyPostsContainer/>
        </div>
    )
}