import React, {FC} from 'react'
import '../Dialogs.scss'

type PropsType = {
    message: string
}

export const Message: FC<PropsType> = ({message}) => {
    return <div className='MessageItem'>
        {message}
    </div>
}