import {ResultCodesEnum} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {authAPI} from "../api/auth-api";
import {ActionsType, AppDispatch, ThunkType} from "./store";
import {profileAPI} from "../api/profile-api";

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    photo: null as string | null
}

type InitialStateType = typeof initialState
type AuthActionType = ActionsType<typeof actions>
type ThunkAuthType = ThunkType<AuthActionType | FormAction>

const authReducer = (state = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload,
            }
        case "SET_IS_AUTH":
            return {...state, isAuth: action.payload}
        case "SET_PHOTO":
            return {...state, photo: action.payload}
        default:
            return state
    }
}
export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null) => (
        {type: 'SET_USER_DATA', payload: {userId, email, login}} as const),
    setIsAuth: (isAuth: boolean) => ({type: 'SET_IS_AUTH', payload: isAuth} as const),
    setPhoto: (payload: string | null) => ({type: 'SET_PHOTO', payload} as const)
}

export const getAuthUserData = (): ThunkAuthType =>
    async (dispatch) => {
        const me = await authAPI.getMe()

        if (me.resultCode === ResultCodesEnum.Success) {
            const {id, email, login} = me.data
            dispatch(actions.setAuthUserData(id, email, login))
            dispatch(actions.setIsAuth(true))
        }
    }

export const getAuthPhoto = (userId: number): ThunkAuthType =>
    async (dispatch) => {
        const data = await profileAPI.getProfile(userId)

        dispatch(actions.setPhoto(data.photos.small))
    }

export const login = (email: string, password: string, rememberMe: boolean): ThunkAuthType =>
    async (dispatch) => {
        const loginData = await authAPI.login(email, password, rememberMe)

        if (loginData.resultCode === ResultCodesEnum.Success) {
            await dispatch(getAuthUserData())
        } else {
            const message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error"
            dispatch(stopSubmit('login', {_error: message}))
        }
    }

export const logout = (): ThunkAuthType =>
    async (dispatch) => {
        const response = await authAPI.logout()

        if (response.data.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.setAuthUserData(null, null, null))
            dispatch(actions.setIsAuth(false))
        }
    }

export default authReducer