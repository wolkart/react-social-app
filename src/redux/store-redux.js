import {createStore, combineReducers} from "redux";
import dialogsReducer from "./dialogsReducer";
import postReducer from "./postReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: postReducer,
    usersPage: usersReducer
})

const store = createStore(rootReducer)

window.store = store

export default store