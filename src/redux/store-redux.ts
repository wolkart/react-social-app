import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
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

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never

export type ActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// @ts-ignore
window.__store__ = store

export default store