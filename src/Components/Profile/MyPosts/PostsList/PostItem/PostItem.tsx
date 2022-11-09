import React, {FC} from 'react'
import './PostItem.scss'

type PropsType = {
    message: string
    like: number
}

export const PostItem: FC<PropsType> = ({message, like}) => {
    return (
        <div className="PostItem">
            <div className="PostItem__ava">
                <img src="https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png" alt=""/>
            </div>
            <span className="PostItem__message">{message}</span>
            <span className="PostItem__like">Like {like}</span>
        </div>
    )
}