import React, {useState} from "react";
import {Preloader} from "../../common/Preloader";
import './ProfileInfo.scss'
import {ProfileAva} from "./ProfileAva";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileInfoList} from "./ProfileInfoList";
import {Contact} from "./Contacts";
import ProfileInfoForm from "./ProfileInfoForm";
import './Contacts.scss'

export const ProfileInfo = ({profile, status, updateStatus, isOwner, changePhoto, saveProfile}) => {
  const [editProfile, setEditProfile] = useState(false)
  if (!profile) return <Preloader/>

  const goToEditMode = () => {
    setEditProfile(true)
  }

  const onSubmit = (formData) => {
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
          updateStatus={updateStatus}
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
            {Object.keys(profile.contacts).map(key => {
              return <Contact key={key} title={key} value={profile.contacts[key]}/>
            })}
          </div>
        </div>

        {isOwner && <button className='ProfileInfoEdit' onClick={goToEditMode}>Редактировать профиль</button>}
      </div>}

      {editProfile &&
      <ProfileInfoForm initialValues={profile} onSubmit={onSubmit} profile={profile}/>}
    </div>
  )
}