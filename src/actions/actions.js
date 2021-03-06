import setAuthToken from "../utils/setAuthToken";

import {
  LOGIN_USER,
  SET_USER_AUTHORIZED,
  REGISTER_USER,
  FETCH_USERS
} from "./types";

// Register User
export const registerUser = (userData) => {
  const url = '/register';
  const payload = {
    action: REGISTER_USER,
    method: 'POST',
    url,
    data: userData
  };
  return { type: "API_INVOCATION", payload };
};

export const loginUser = userData => {
  const url = '/users/login';
  const payload = {
    action: LOGIN_USER,
    method: 'POST',
    url,
    data: userData
  };
  return { type: "API_INVOCATION", payload };
};

export const fetchUsers = () => {
  const url = '/users';
  const payload = {
    action: FETCH_USERS,
    method: 'GET',
    url
  };
  return { type: "API_INVOCATION", payload };
};


export const logoutUser = () => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  return { type: SET_USER_AUTHORIZED, payload: { isAuthenticated: false } }
};
