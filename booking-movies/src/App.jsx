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
      
            path='/loginpage'
          />
          <Route
            component={RegisterPage}
      
            path='/registerpage'
          />
        </Switch>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
