/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import {LoginPage, RegisterPage, ErrorPage, HomePage, NewsPage, ContactPage} from './pages/index';
import { Route, Switch} from 'react-router-dom';  
import {LOGIN_PAGE, REGISTER_PAGE, HOME_PAGE, NEWS_PAGE, CONTACT_PAGE, LOGIN_SUCCESS, LOCAL_STORAGE_CREDENTIALS_KEY} from './constants/constant';
import AppBar from './components/AppBar/AppBar';
import { useDispatch } from 'react-redux';
import { createAction } from './redux/actions';
import { getDataFromLocalStorage } from './utils/LocalStorage/LocalStorage';
import { toast } from 'react-toastify';


toast.configure({
  autoClose: 2000,
});
function App() {
  const dispatch = useDispatch();

  const getCredentialsFromLocal = () => {
    const credentialsStr = getDataFromLocalStorage(LOCAL_STORAGE_CREDENTIALS_KEY);
    if(credentialsStr){
      dispatch(createAction(LOGIN_SUCCESS, JSON.parse(credentialsStr)))
    }
  }

  useEffect(() => {
    getCredentialsFromLocal()
  });


  return (
    <div className='App'>
      <AppBar />
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
          component={NewsPage}
          exact
          path={NEWS_PAGE}
        />
        <Route
          component={ContactPage}
          exact
          path={CONTACT_PAGE}
        />
        <Route
          component={ErrorPage}
        />
      </Switch>
    </div>
  );
}

export default App;
