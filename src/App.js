import './App.scss';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Footer} from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <div className="Content">
        <NavBar/>
        <Profile/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
