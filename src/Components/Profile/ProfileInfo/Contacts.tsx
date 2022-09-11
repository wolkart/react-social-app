import React from "react";
import './Contacts.scss'

export const Contact = ({title, value}) => {
  return (
    value && <div className='Contact'>
      <a href={value} target={'_blank'} className="Contact__link">{title}</a>
    </div>
  )
}