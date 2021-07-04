import React from 'react'
import './Users.scss'
import * as axios from "axios";
import userStub from '../../assets/images/wolf.png'

export const Users = (props) => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          props.setUsers(response.data.items)
        })
    }
  }

  return (
    <div className="Users">
      <div className="Users__heading">Users</div>
      <button className="User__button" onClick={getUsers}>Get users</button>
      <div className="Users__list">
        {
          props.users.map(user => {
            return (
              <div className="User" key={user.id}>
                <div className="User__person">
                  <div className="User__photo">
                    <img src={user.photos.small != null ? user.photos.small : userStub} alt={user.name}/>
                  </div>
                  {
                    user.followed
                      ? <button onClick={() =>
                        props.unfollow(user.id)
                      } className="User__button">Unfollow</button>
                      : <button onClick={() =>
                        props.follow(user.id)
                      } className="User__button">Follow</button>
                  }
                </div>
                <div className="User__info">
                  <div className="User__name">{user.name}</div>
                  <div className="User__status">{user.status}</div>
                  <div className="User__location">
                    {/*<span>{user.location.city}</span>*/}
                    {/*<span>{user.location.country}</span>*/}
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