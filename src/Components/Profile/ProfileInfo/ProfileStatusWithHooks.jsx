import React, {useEffect, useState} from "react";
import './ProfileStatus.scss'

export const ProfileStatusWithHooks = props => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activeEditMode = () => {
    setEditMode(true)
  }

  const deactivatedEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (event) => {
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