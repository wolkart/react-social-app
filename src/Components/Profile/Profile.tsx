import React, {FC} from 'react'
import './Profile.scss'
import {Wallpaper} from "./Wallpaper/Wallpaper";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../types/types";

export type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    changePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

export const Profile: FC<ProfileInfoPropsType> = (
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