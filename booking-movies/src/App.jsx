/* eslint-disable linebreak-style */
import React from 'react';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import {LoginPage, RegisterPage} from './pages/index';
function App() {
  return (
    <div className='App'>
      {/**
        
        <LoginPage />
      */}
      <RegisterPage />
    </div>
  );
}

export default App;
