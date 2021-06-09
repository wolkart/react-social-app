import React from 'react'
import './Users.scss'

export const Users = (props) => {
  return (
    <div className="Users">
      <div className="Users__heading">Users</div>
      <div className="Users__list">
        {
          props.users.map(user => {
            return (
                <div className="User" key={user.id}>
                  <div className="User__inner">
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                    <div className="User__location">
                      <span>{user.location.city}</span>
                      <span>{user.location.country}</span>
                    </div>
                  </div>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}