import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from "./redux/store-redux";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={store}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderTree(store.getState())

store.subscribe(() => {
    rerenderTree(store.getState())
})

reportWebVitals();
