import React, {ChangeEvent, FC, useEffect, useState} from "react";
import './ProfileStatus.scss'
import {useDispatch} from "react-redux";
import {updateUserStatus} from "../../../../../redux/profileReducer";

type PropsType = {
  status: string
  isOwner: boolean
}

export const ProfileStatus: FC<PropsType> = props => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)
  const dispatch = useDispatch()

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activeEditMode = () => {
    if (props.isOwner) setEditMode(true)
  }

  const deactivatedEditMode = () => {
    setEditMode(false)
    dispatch(updateUserStatus(status))
  }

  const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.currentTarget.value)
  }

  return (
    <div className="ProfileStatus">
      {!editMode &&
      <span onClick={activeEditMode} className="ProfileStatus__text">{props.status || "Edit status"}</span>
      }

      {editMode &&
      <div className="ProfileStatus__input">
        <input
          onBlur={deactivatedEditMode}
          onChange={onStatusChange}
          autoFocus={true}
          type="text"
          value={status}
        />
      </div>}
    </div>
  )

}