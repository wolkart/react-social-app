import React, {Suspense} from 'react'
import './App.scss';
import {Footer} from "./Components/Footer/Footer";
import {NavBar} from "./Components/NavBar/NavBar";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import {Music} from "./Components/Music/Music";
// import DialogsContainer from "./Components/Dialogs/DialogsContainer";
// import ProfileContainer from "./Components/Profile/ProfileContainer";
// import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./Components/common/Preloader";
import store from "./redux/store-redux";

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) return <Preloader/>

    return (
      <div className="App">
        <HeaderContainer/>
        <div className="MainContainer">
          <div className="MainContainer__inner">
            <NavBar/>
            <div className="MainContainer__content">
              <Suspense fallback={<Preloader/>}>
                <Switch>
                  <Route
                    path='/profile/:userId?'
                    render={() => <ProfileContainer/>}
                  />
                  <Route
                    path='/dialogs'
                    render={() => <DialogsContainer/>}
                  />
                  <Route
                    path='/users'
                    render={() => <UsersContainer/>}
                  />
                </Switch>
              </Suspense>
              <Route
                path='/music'
                render={() => <Music/>}
              />
              <Route
                path='/login'
                render={() => <Login/>}
              />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App)

const SocialApp = props => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </BrowserRouter>
  )
}

export default SocialApp
