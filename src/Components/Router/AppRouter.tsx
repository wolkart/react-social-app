import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {withSuspense} from "../hoc/withSuspense";
import {UsersPage} from "../Users/UsersPage";
import {Music} from "../Music/Music";
import {Login} from "../Login/Login";

const Chat = React.lazy(() => import('../../pages/Chat/Chat'))
const Profile = React.lazy(() => import('../Profile/Profile'))

export const AppRouter = () => {
    return (
        <Switch>
            <Route
                exact path='/'
                render={() => <Redirect to={'/profile'}/>}
            />
            <Route
                path='/profile/:userId?'
                render={withSuspense(Profile)}
            />
            <Route
                path='/dialogs'
                render={withSuspense(Chat)}
            />
            <Route
                path='/users'
                render={() => <UsersPage/>}
            />
            <Route
                path='/music'
                render={() => <Music/>}
            />
            <Route
                path='/login'
                render={() => <Login/>}
            />
        </Switch>
    );
};