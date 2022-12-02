import {ResultCodesEnum} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {authAPI} from "../api/auth-api";
import {ActionsType, ThunkType} from "./store-redux";

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
}

type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}
export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => (
        {type: 'SET_USER_DATA', payload: {userId, email, login, isAuth}} as const)
}

type AuthActionType = ActionsType<typeof actions>
type ThunkAuthType = ThunkType<AuthActionType | FormAction>

export const getAuthUserData = (): ThunkAuthType => async (dispatch) => {
    const me = await authAPI.getMe()

    if (me.resultCode === ResultCodesEnum.Success) {
        const {id, email, login} = me.data
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
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

export const logout = (): ThunkAuthType => async (dispatch) => {
    const response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}

export default authReducer