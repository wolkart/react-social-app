const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

const initialState = {
  users: [
    {
      id: 1,
      photo: 'https://i.pinimg.com/236x/fc/88/34/fc88340caa7ef1b57877246ffc78646d--wolves-chocolate.jpg?nii=t',
      followed: false,
      fullName: 'Artem',
      status: 'I am frontend developer',
      location: {
        city: 'Tver',
        country: 'Russia'
      }
    },
    {
      id: 2,
      photo: 'https://i.pinimg.com/originals/8b/0c/85/8b0c85f1290a4aafc10e4633c5740269.jpg',
      followed: true,
      fullName: 'Olga',
      status: 'I am wife of Artem',
      location: {
        city: 'Tver',
        country: 'Russia'
      }
    },
    {
      id: 3,
      photo: 'https://99px.ru/sstorage/56/2019/11/image_561311190659479643839.jpg',
      followed: false,
      fullName: 'Fiona',
      status: 'I am daughter of Artem',
      location: {
        city: 'Tver',
        country: 'Russia'
      }
    },
  ]
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    default:
      return state
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer