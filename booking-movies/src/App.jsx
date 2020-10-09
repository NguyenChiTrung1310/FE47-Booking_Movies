/* eslint-disable linebreak-style */
import React from 'react';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import {LoginPage, RegisterPage, ErrorPage, HomePage} from './pages/index';
import { Route, Switch} from 'react-router-dom';  
import {LOGIN_PAGE, REGISTER_PAGE, HOME_PAGE} from './constants/constant';
function App() {
  return (
    <div className='App'>
      
      <Switch> 
          
        <Route
          component={LoginPage}
          exact
          path={LOGIN_PAGE}
        />
        <Route
          component={RegisterPage}
          exact
          path={REGISTER_PAGE}
        />
        <Route
          component={HomePage}
          exact
          path={HOME_PAGE}
        />
        <Route
          component={ErrorPage}
        />
      </Switch>
      
     
     
    </div>
  );
}

export default App;
