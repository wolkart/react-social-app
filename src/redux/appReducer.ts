import {getAuthUserData} from "./authReducer";
import {ThunkAction} from "redux-thunk";
import {ActionsType, AppStateType} from "./store-redux";

const initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

type AppActionsType = ActionsType<typeof actions>

export const actions = {
    initializedSuccess: () => ({type: 'INITIALIZED_SUCCESS'} as const)
}

type ThunkActionType = ThunkAction<void, AppStateType, unknown, AppActionsType>

export const initializeApp = (): ThunkActionType => async (dispatch) => {
    const promise = await dispatch(getAuthUserData())

    Promise.all([promise])
        .then(() => {
            dispatch(actions.initializedSuccess())
        })
}

export default appReducer