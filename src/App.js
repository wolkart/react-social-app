import React from 'react'
import './App.scss';
import {Footer} from "./Components/Footer/Footer";
import {NavBar} from "./Components/NavBar/NavBar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./Components/common/Preloader";
import store from "./redux/store-redux";

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
