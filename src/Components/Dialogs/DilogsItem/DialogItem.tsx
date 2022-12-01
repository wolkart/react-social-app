import React, {FC} from 'react'
import '../Dialogs.scss'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/dialogsReducer";

export const DialogItem: FC<DialogType> = (
    {
        id,
        photo,
        name
    }
) => {
    const path = `/dialogs/${id}`
    return (
        <div className='DialogItem'>
            <NavLink to={path} className='DialogLink' activeClassName='active'>
                <div className='DialogAvatar'>
                    <img src={photo} alt=""/>
                </div>
                {name}
            </NavLink>
        </div>
    )
}