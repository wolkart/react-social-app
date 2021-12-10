import React from 'react'
import './App.scss';
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";

const App = (props) => {
  return (
    <div className="App">
      <Header/>
      <div className="MainContainer">
        <div className="MainContainer__inner">
          <NavBar/>
          <div className="MainContainer__content">
            <Route
              path='/profile'
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
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
