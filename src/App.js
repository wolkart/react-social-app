import './App.css';
import {Header} from "./Components/Header";
import {NavBar} from "./Components/NavBar";
import {Profile} from "./Components/Profile";
import {Footer} from "./Components/Footer";

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
