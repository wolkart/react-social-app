import {createStore, combineReducers} from "redux";
import dialogsReducer from "./dialogsReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: postReducer
})

const sture = createStore(rootReducer)

window.store = sture

export default sture