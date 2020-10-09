/* eslint-disable linebreak-style */
import React from 'react';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import {LoginPage, RegisterPage} from './pages/index';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route
            component={LoginPage}
      
            path='/login'
          />
          <Route
            component={RegisterPage}
      
            path='/register'
          />
        </Switch>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
