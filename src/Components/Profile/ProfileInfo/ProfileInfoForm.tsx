import React, {FC} from "react";
import {createField, GetFormKeys, Input, Textarea} from "../../common/Forms/FormsControls";
import {reduxForm} from "redux-form";
import './ProfileInfoForm.scss'
import '../../common/Forms/FormControls.scss'
import {ProfileType} from "../../../types/types";
import {InjectedFormProps} from "redux-form/lib/reduxForm";

type PropsType = {
    profile: ProfileType
}

const ProfileInfoForm: FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = (
    {
        handleSubmit,
        profile,
        error
    }) => {
  return (
    <form className='ProfileInfoForm' onSubmit={handleSubmit}>
      <div className='ProfileInfoForm__field'>
        <div className="ProfileInfoForm__label">Имя</div>
        {createField<GetFormKeys<ProfileType>>('Изменить', 'fullName', Input, [])}
      </div>
      <div className='ProfileInfoForm__field'>
        <div className="ProfileInfoForm__label">Ищу работу</div>
        {createField<GetFormKeys<ProfileType>>("", 'lookingForAJob', Input, [], {type: 'checkbox'})}
      </div>
      <div className='ProfileInfoForm__field'>
        <div className="ProfileInfoForm__label">Мои навыки</div>
        {createField<GetFormKeys<ProfileType>>('Изменить', 'lookingForAJobDescription', Textarea, [])}
      </div>
      <div className='ProfileInfoForm__field'>
        <div className="ProfileInfoForm__label">Обо мне</div>
        {createField<GetFormKeys<ProfileType>>('Изменить', 'aboutMe', Textarea, [])}
      </div>
      {Object.keys(profile.contacts).map(key => {
        return <div key={key} className='ProfileInfoForm__field'>
          <div className="ProfileInfoForm__label">{key}</div>
            {/*todo:create some solution for embedded objects*/}
          {createField(key, `contacts.${key}`, Input, [])}
        </div>
      })}
      {error && <div className="FormSummaryError">
        {error}
      </div>}
      <button className='ProfileInfoForm__button'>Сохранить профиль</button>
    </form>
  )
}

const ProfileInfoFormRedux = reduxForm<ProfileType, PropsType>({form: 'profile'})(ProfileInfoForm)

export default ProfileInfoFormRedux