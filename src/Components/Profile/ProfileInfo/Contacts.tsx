import React, {FC} from "react";
import './Contacts.scss'

type PropsType = {
    title: string
    value: string
}

export const Contact: FC<PropsType> = (
    {
        title,
        value
    }) => {
    return (
        <div className='Contact'>
          <a href={value} target={'_blank'} className="Contact__link">{title}</a>
        </div>
    )
}