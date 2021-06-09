import React from 'react'
import './Users.scss'

export const Users = (props) => {
  console.log(props)
  return (
    <div className="Users">
      <div className="Users__heading">Users</div>
      <div className="Users__list">
        {
          props.users.map(user => {
            return (
              <div className="User" key={user.id}>
                <div className="User__person">
                  <div className="User__photo">
                    <img src={user.photo} alt={user.fullName}/>
                  </div>
                  {
                    user.followed
                      ? <button onClick={() => props.unfollow(user.id)} className="User__button">Unfollow</button>
                      : <button onClick={() => props.follow(user.id)} className="User__button">Follow</button>
                  }
                </div>
                <div className="User__info">
                  <div className="User__name">{user.fullName}</div>
                  <div className="User__status">{user.status}</div>
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