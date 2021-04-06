import React from 'react';
import ReactDOM from 'react-dom';

import MainRouter from './mainRouter';
import store from "./Redux/Store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <MainRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


