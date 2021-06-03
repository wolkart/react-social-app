import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from "./redux/store";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderTree(store.getState())

store.subscribe(rerenderTree)

reportWebVitals();
