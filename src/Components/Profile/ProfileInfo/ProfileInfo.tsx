import React, {FC, useState} from "react";
import {Preloader} from "../../common/Preloader";
import './ProfileInfo.scss'
import {ProfileAva} from "./ProfileAva";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileInfoList} from "./ProfileInfoList";
import {Contact} from "./Contacts";
import ProfileInfoForm from "./ProfileInfoForm";
import './Contacts.scss'
import {ContactsType, ProfileType} from "../../../types/types";
import {ProfileInfoPropsType} from "../Profile";

export const ProfileInfo: FC<ProfileInfoPropsType> = (
    {
        profile,
        status,
        updateUserStatus,
        isOwner,
        changePhoto,
        saveProfile
    }) => {
    const [editProfile, setEditProfile] = useState(false)
    if (!profile) return <Preloader/>

    const goToEditMode = () => {
        setEditProfile(true)
    }

    const onSubmit = (formData: ProfileType) => {
        // todo: remove then
        saveProfile(formData)
            .then(() => {
                setEditProfile(false)
            })
    }

    return (
        <div className='ProfileInfo'>
            <div className="ProfileInfo__ava">
                <ProfileAva
                    image={profile.photos.large}
                    isOwner={isOwner}
                    changePhoto={changePhoto}
                />
            </div>
            {!editProfile &&
              <div className="ProfileInfo__description">
                <div className="ProfileInfo__name">{profile.fullName}</div>
                <ProfileStatusWithHooks
                  status={status}
                  updateStatus={updateUserStatus}
                  isOwner={isOwner}
                />
                <ProfileInfoList
                  aboutMe={profile.aboutMe}
                  lookingForAJob={profile.lookingForAJob}
                  lookingForAJobDescription={profile.lookingForAJobDescription}
                />

                <div className='Contacts'>
                  <div className="Contacts__label">Контакты:</div>
                  <div className="Contacts__list">
                      {Object
                          .keys(profile.contacts)
                          .map(key => {
                              const value = profile.contacts[key as keyof ContactsType]
                              return (
                                  value && <Contact
                                      key={key}
                                      title={key}
                                      value={value}
                                  />
                              )
                          })}
                  </div>
                </div>

                  {isOwner && <button
                    className='ProfileInfoEdit'
                    onClick={goToEditMode}
                  >
                    Редактировать профиль
                  </button>}
              </div>}

            {editProfile &&
              <ProfileInfoForm
                initialValues={profile}
                onSubmit={onSubmit}
                profile={profile}
              />}
        </div>
    )
}