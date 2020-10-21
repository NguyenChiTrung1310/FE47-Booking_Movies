import { LOCAL_STORAGE_CREDENTIALS_KEY, LOCAL_STORAGE_TOKEN_KEY } from '../../constants/constant';


/* ========= USER TOKEN ========= */
export const storeUserToken = (token) => {
  localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
}

/* ========= USER CREDENTIALS ========= */
// set 
export const storeCredentials = (token) => {
  localStorage.setItem(LOCAL_STORAGE_CREDENTIALS_KEY, token);
}

// get
export const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
}


