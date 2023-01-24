import React, {FC, useEffect, useState} from "react";
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileAva} from "./components/ProfileAva";
import {ProfileInfo} from "./components/ProfileInfo";
import ProfileInfoForm from "./components/ProfileInfoForm";
import {ProfileType} from "../../../../types/types";
import {useDispatch} from "react-redux";
import {saveProfile} from "../../../../redux/profileReducer";
import {Button, Space, Typography} from "antd";
import {StyledProfileDashboard, StyledProfileDashboardAvatar} from "./styled";
import { ProfileStatus } from "./components/ProfileStatus";

const {Title} = Typography

type PropsType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
}

export const ProfileDashboard: FC<PropsType> = (
    {
        profile,
        status,
        isOwner,
        // saveProfile
    }) => {
    const [editProfile, setEditProfile] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (editProfile) setEditProfile(false)
    }, [profile])

    const goToEditMode = () => {
        setEditProfile(true)
    }

    const onSubmit = (formData: ProfileType) => {
        dispatch(saveProfile(formData))
    }

    if (!profile) return <Preloader/>

    return (
        <StyledProfileDashboard>
            <StyledProfileDashboardAvatar isOwner={isOwner}>
                <ProfileAva
                    image={profile.photos.large}
                    isOwner={isOwner}
                />
            </StyledProfileDashboardAvatar>

            {!editProfile &&
                <Space direction='vertical' size={'large'}>
                    <Space direction='vertical'>
                        <Title children={profile.fullName}/>
                        <ProfileStatus
                            status={status}
                            isOwner={isOwner}
                        />
                    </Space>

                    <ProfileInfo
                        aboutMe={profile.aboutMe}
                        lookingForAJob={profile.lookingForAJob}
                        lookingForAJobDescription={profile.lookingForAJobDescription}
                        contacts={profile.contacts}
                    />

                    {isOwner && <Button
                        onClick={goToEditMode}
                        type='primary'
                    >
                        Редактировать профиль
                    </Button>}
                </Space>
            }

            {editProfile &&
                <ProfileInfoForm
                    initialValues={profile}
                    onSubmit={onSubmit}
                    profile={profile}
                />}
        </StyledProfileDashboard>
    )
}