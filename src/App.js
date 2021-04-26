import React from 'react'
import './App.scss';
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <div className="MainContainer">
          <div className="MainContainer__inner">
            <NavBar/>
            <div className="MainContainer__content">
              <Route path='/profile' component={Profile}/>
              <Route path='/dialogs' component={Dialogs}/>
              <Route path='/news' component={News}/>
              <Route path='/music' component={Music}/>
            </div>
          </div>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
