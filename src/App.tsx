import React, {ComponentType, FC} from 'react';
import './App.scss';
import {Footer} from "./Components/Footer/Footer";
import {NavBar} from "./Components/NavBar/NavBar";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {Login} from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./Components/common/Preloader";
import store, {AppStateType} from "./redux/store";
import {withSuspense} from './Components/hoc/withSuspense';
import {UsersPage} from './Components/Users/UsersPage';
import {Header} from "./Components/Header/Header";

const Dialogs = React.lazy(() => import('./Components/Dialogs/Dialogs'))
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'))
// const UsersContainer = React.lazy(() => import('./Components/UsersPage/UsersContainer'))

type MapProps = ReturnType<typeof mapStateToProps>
type DispatchProps = {
    initializeApp: () => void
}

class App extends React.Component<MapProps & DispatchProps> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>

        return (
            <div className="App">
                <Header/>
                <div className="MainContainer">
                    <div className="MainContainer__inner">
                        <NavBar/>
                        <div className="MainContainer__content">
                            <Switch>
                                <Route
                                    exact path='/'
                                    render={() => <Redirect to={'/profile'}/>}
                                />
                                <Route
                                    path='/profile/:userId?'
                                    render={withSuspense(ProfileContainer)}
                                />
                                <Route
                                    path='/dialogs'
                                    render={withSuspense(Dialogs)}
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
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

const AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const SocialApp: FC = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SocialApp
