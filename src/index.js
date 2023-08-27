import "bootstrap/dist/css/bootstrap.min.css";
import store from './Redux/redux-store'
import React from "react";
import './index.css';
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById("root")); 
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
        <App/>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );