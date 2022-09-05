import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {profileAPI} from "../api/profile-api";
import {ActionsType, ThunkType} from "./store-redux";

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 10},
        {id: 2, message: 'My name is Artem!', like: 87}
    ] as PostType[],
    profile: null as ProfileType | null,
    status: ''
}

type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD_POST': {
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: action.newPost, like: 77}],
            }
        }
        case 'SET_USER_PROFILE': {
            return {
                ...state, profile: action.profile
            }
        }
        case 'SET_STATUS': {
            return {
                ...state, status: action.status
            }
        }
        case 'CHANGE_PHOTO_SUCCESS': {
            return {
                ...state, profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        default:
            return state
    }
}

type ProfileActionsType = ActionsType<typeof actions>
type ProfileThunkType = ThunkType<ProfileActionsType | FormAction>

export const actions = {
    addNewPost: (newPost: string) => ({type: 'ADD_POST', newPost} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SET_STATUS', status} as const),
    changePhotoSuccess: (photos: PhotosType) => ({type: 'CHANGE_PHOTO_SUCCESS', photos} as const)
}

export const getUserProfile = (userId: number): ProfileThunkType =>
    async (dispatch) => {
        const data = await profileAPI.getProfile(userId)

        dispatch(actions.setUserProfile(data))
    }

export const getUserStatus = (userId: number): ProfileThunkType =>
    async (dispatch) => {
        const data = await profileAPI.getStatus(userId)

        dispatch(actions.setStatus(data))
    }

export const updateUserStatus = (status: string): ProfileThunkType =>
    async (dispatch) => {
        const data = await profileAPI.updateStatus(status)

        if (data.resultCode === 0) {
            dispatch(actions.setStatus(status))
        }
    }

export const changePhoto = (file: File): ProfileThunkType =>
    async (dispatch) => {
        const data = await profileAPI.changePhoto(file)

        if (data.resultCode === 0) {
            dispatch(actions.changePhotoSuccess(data.data.photos))
        }
    }

export const saveProfile = (profile: ProfileType): ProfileThunkType =>
    async (dispatch, getState) => {
        const userId = getState().auth.userId
        const data = await profileAPI.saveProfile(profile)

        if (data.resultCode === 0) {
            if (userId !== null) {
                dispatch(getUserProfile(userId))
            } else {
                throw new Error("User id can't be null")
            }
        } else {
            dispatch(stopSubmit('profile', {_error: data.messages[0]}))
            return Promise.reject(data.messages[0])
        }
    }

export default profileReducer