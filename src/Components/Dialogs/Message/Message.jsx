import React from 'react'
import '../Dialogs.scss'

export const Message = ({message}) => {
    return <div className='MessageItem'>
        {message}
    </div>
}