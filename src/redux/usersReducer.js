const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

const initialState = {
  users: [
    {id: 1, followed: false, fullName: 'Artem', status: 'I am frontend developer', location: {city: 'Tver', country: 'Russia'}},
    {id: 2, followed: true, fullName: 'Olga', status: 'I am wife of Artem', location: {city: 'Tver', country: 'Russia'}},
    {id: 3, followed: false, fullName: 'Fiona', status: 'I am daughter of Artem', location: {city: 'Tver', country: 'Russia'}},
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