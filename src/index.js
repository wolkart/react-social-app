import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./redux/state";


ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addpost={addPost}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
