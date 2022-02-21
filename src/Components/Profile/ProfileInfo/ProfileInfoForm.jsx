import React from "react";
import {CreateField, Input, Textarea} from "../../common/Forms/FormsControls";
import {reduxForm} from "redux-form";
import './ProfileInfoForm.scss'
import '../../common/Forms/FormControls.scss'

const ProfileInfoForm = ({handleSubmit, profile, error}) => {
  return (
    <form className='ProfileInfoForm' onSubmit={handleSubmit}>
      <div className='ProfileInfoForm__field'>
        <div className="ProfileInfoForm__label">Имя</div>
        {CreateField('Изменить', 'fullName', Input, [])}
      </div>
      <div className='ProfileInfoForm__field'>
        <div className="ProfileInfoForm__label">Ищу работу</div>
        {CreateField(null, 'lookingForAJob', Input, [], {type: 'checkbox'})}
      </div>
      <div className='ProfileInfoForm__field'>
        <div className="ProfileInfoForm__label">Мои навыки</div>
        {CreateField('Изменить', 'lookingForAJobDescription', Textarea)}
      </div>
      <div className='ProfileInfoForm__field'>
        <div className="ProfileInfoForm__label">Обо мне</div>
        {CreateField('Изменить', 'aboutMe', Textarea)}
      </div>
      {Object.keys(profile.contacts).map(key => {
        return <div key={key} className='ProfileInfoForm__field'>
          <div className="ProfileInfoForm__label">{key}</div>
          {CreateField(key, `contacts.${key}`, Input)}
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