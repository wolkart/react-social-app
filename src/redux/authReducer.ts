import {authAPI, ResultCodes} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'social-app/SET_USER_DATA'

type InitialStateType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

const initialState: InitialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

type SetAuthUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

export type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: {userId, email, login, isAuth}
})

export const getAuthUserData = () => async (dispatch: any) => {
  const me = await authAPI.getMe()

  if (me.resultCode === ResultCodes.Success) {
    const {id, email, login} = me.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
  const loginData = await authAPI.login(email, password, rememberMe)

  if (loginData.resultCode === ResultCodes.Success) {
    dispatch(getAuthUserData())
  } else {
    const message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error"
    dispatch(stopSubmit('login', {_error: message}))
  }
}

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logout()

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer