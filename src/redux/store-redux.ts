import {createStore, combineReducers, applyMiddleware, compose, Action} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

type RootReducer = typeof rootReducer
export type AppStateType = ReturnType<RootReducer>

export type ActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
export type ThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// @ts-ignore
window.__store__ = store

export default store