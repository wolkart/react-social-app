import './App.scss';
import {Header} from "./Components/Header/Header";
import {Content} from "./Components/Content/Content";
import {Footer} from "./Components/Footer/Footer";

const App = () => {
  return (
      <div className="App">
        <Header/>
        <Content/>
        <Footer/>
      </div>
  );
}

export default App;
