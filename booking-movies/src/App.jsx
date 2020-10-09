/* eslint-disable linebreak-style */
import React from 'react';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import {LoginPage, RegisterPage, ErrorPage, HomePage} from './pages/index';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import * as types from './constants/constant'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch> 
          
          <Route
            component={LoginPage}
            exact
            path={types.LOGIN_TYPE}
          />
          <Route
            component={RegisterPage}
            exact
            path={types.REGISTER_TYPE}
          />
          <Route
            component={HomePage}
            exact
            path='/'
          />
          <Route
            component={ErrorPage}
          />
        </Switch>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
