import React, {FC} from "react";
import './ProfileInfoList.scss'

type PropsType = {
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
}

export const ProfileInfoList: FC<PropsType> = (
    {
        aboutMe,
        lookingForAJob,
        lookingForAJobDescription
    }) => {
    return (
        <div className="ProfileInfoList">
            <div className="ProfileInfoList__item">
                <span className="ProfileInfoList__item-label">Ищу работу:</span>
                <span className="ProfileInfoList__item-text">{lookingForAJob ? "Да" : "Нет"}</span>
            </div>
            {lookingForAJob &&
              <div className="ProfileInfoList__item">
                <span className="ProfileInfoList__item-label">Мои навыки:</span>
                <span className="ProfileInfoList__item-text">{lookingForAJobDescription}</span>
              </div>}
            <div className="ProfileInfoList__item">
                <span className="ProfileInfoList__item-label">О себе:</span>
                <span className="ProfileInfoList__item-text">{aboutMe}</span>
            </div>
        </div>
    )
}