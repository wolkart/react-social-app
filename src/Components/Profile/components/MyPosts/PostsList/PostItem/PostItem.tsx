import React, {FC} from 'react'
import './PostItem.scss'
import userStub from "../../../../../../assets/images/ava-stub.jpg";

type PropsType = {
    message: string
    like: number
    photo: string | null
}

export const PostItem: FC<PropsType> = ({message, like, photo}) => {
    return (
        <div className="PostItem">
            <div className="PostItem__ava">
                <img src={photo || userStub} alt=""/>
            </div>
            <span className="PostItem__message">{message}</span>
            <span className="PostItem__like">Like {like}</span>
        </div>
    )
}