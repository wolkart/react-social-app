import React from 'react'
import './App.scss';
import {Footer} from "./Components/Footer/Footer";
import {NavBar} from "./Components/NavBar/NavBar";
import {Route} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/Login";

const App = (props) => {
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

export default App;
