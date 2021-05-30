import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewTextPost} from "./redux/state";

export const rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addpost={addPost} updateNewTextPost={updateNewTextPost}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

reportWebVitals();
