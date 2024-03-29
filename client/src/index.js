import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from "./login"
import Register from "./signup"
import Home from "./routes/home"


ReactDOM.render(

	<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
