import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', like: 10},
    {id: 2, message: 'My name is Artem!', like: 87}
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, {id: 3, message: action.newPost, like: 77}],
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state, profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state, status: action.status
      }
    }
    default:
      return state
  }
}

export const addNewPost = (newPost) => ({type: ADD_POST, newPost})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId)
    .then(response => {
      dispatch(setUserProfile(response.data))
    })
}

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
      .then(response => {
        dispatch(setStatus(response.data))
      })
}

export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status))
        }
      })
}

export default profileReducer