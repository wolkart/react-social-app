import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {profileAPI} from "../api/profile-api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const CHANGE_PHOTO_SUCCESS = 'CHANGE_PHOTO_SUCCESS'



type InitialStateType = {
  posts: Array<PostType>
  profile: ProfileType | null
  status: string
}

const initialState: InitialStateType = {
  posts: [
    {id: 1, message: 'Hi, how are you?', like: 10},
    {id: 2, message: 'My name is Artem!', like: 87}
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
    case CHANGE_PHOTO_SUCCESS: {
      return {
        ...state, profile: {...state.profile, photos: action.photos} as ProfileType
      }
    }
    default:
      return state
  }
}

type AddNewPostActionType = {
  type: typeof ADD_POST
  newPost: string
}

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}

type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string
}

type ChangePhotoSuccessActionType = {
  type: typeof CHANGE_PHOTO_SUCCESS
  photos: PhotosType
}

export const addNewPost = (newPost: string): AddNewPostActionType => ({type: ADD_POST, newPost})
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})
export const changePhotoSuccess = (photos: PhotosType): ChangePhotoSuccessActionType => ({type: CHANGE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getProfile(userId)

  dispatch(setUserProfile(response.data))
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getStatus(userId)

  dispatch(setStatus(response.data))
}

export const updateUserStatus = (status: string) => async (dispatch: any) => {
  const response = await profileAPI.updateStatus(status)

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const changePhoto = (file: any) => async (dispatch: any) => {
  const response = await profileAPI.changePhoto(file)

  if (response.data.resultCode === 0) {
    dispatch(changePhotoSuccess(response.data.data.photos))
  }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId
  const response = await profileAPI.saveProfile(profile)

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else {
    dispatch(stopSubmit('profile', {_error: response.data.messages[0]}))
    return Promise.reject(response.data.messages[0])
  }
}

export default profileReducer