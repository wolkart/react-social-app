import React, {FC} from 'react'

type PropsType = {
    message: string
}

export const Message: FC<PropsType> = ({message}) => {
    return <div className='MessageItem'>
        {message}
    </div>
}