import {createStore, combineReducers, applyMiddleware} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import {reduxForm} from "redux-form";

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: reduxForm
})

const store = createStore(rootReducer, applyMiddleware(thunk))

window.store = store

export default store