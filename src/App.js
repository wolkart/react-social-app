import React from 'react'
import './App.scss';
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";

const App = (props) => {
  return (
      <div className="App">
        <Header/>
        <div className="MainContainer">
          <div className="MainContainer__inner">
            <NavBar/>
            <div className="MainContainer__content">
              <Route path='/profile' render={() => <Profile
                profilePage={props.state.profilePage}
                updateNewTextPost={props.updateNewTextPost}
                addPost={props.addpost}/>}/>
              <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
              <Route path='/news' render={() => <News/>}/>
              <Route path='/music' render={() => <Music/>}/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
