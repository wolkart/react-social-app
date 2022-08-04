import React from "react";
import {createField, Input, Textarea} from "../../common/Forms/FormsControls";
import {reduxForm} from "redux-form";
import './ProfileInfoForm.scss'
import '../../common/Forms/FormControls.scss'

const ProfileInfoForm = ({handleSubmit, profile, error}) => {
  return (
    <form className='ProfileInfoForm' onSubmit={handleSubmit}>
      <div className='ProfileInfoForm__field'>
        <div className="ProfileInfoForm__label">Имя</div>
        {createField('Изменить', 'fullName', Input, [])}
      </div>
      <div className='ProfileInfoForm__field'>
        <div className="ProfileInfoForm__label">Ищу работу</div>
        {createField(null, 'lookingForAJob', Input, [], {type: 'checkbox'})}
      </div>
      <div className='ProfileInfoForm__field'>
        <div className="ProfileInfoForm__label">Мои навыки</div>
        {createField('Изменить', 'lookingForAJobDescription', Textarea)}
      </div>
      <div className='ProfileInfoForm__field'>
        <div className="ProfileInfoForm__label">Обо мне</div>
        {createField('Изменить', 'aboutMe', Textarea)}
      </div>
      {Object.keys(profile.contacts).map(key => {
        return <div key={key} className='ProfileInfoForm__field'>
          <div className="ProfileInfoForm__label">{key}</div>
          {createField(key, `contacts.${key}`, Input)}
        </div>
      })}
      {error && <div className="FormSummaryError">
        {error}
      </div>}
      <button className='ProfileInfoForm__button'>Сохранить профиль</button>
    </form>
  )
}

const ProfileInfoFormRedux = reduxForm({form: 'profile'})(ProfileInfoForm)

export default ProfileInfoFormRedux