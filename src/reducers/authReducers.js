import setAuthToken from "../utils/setAuthToken";
import {
  LOGIN_USER_PENDING,
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS,
  SET_USER_AUTHORIZED,
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  error: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS: {
      // Set token to localStorage
      const {
        token,
        data: { user },
      } = action.payload.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: "",
        user,
      };
    }
    case LOGIN_USER_PENDING:
      return {
        ...state,
        loading: true,
        error: "",
        user: {}
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error.message,
        user: {}
      };
    case SET_USER_AUTHORIZED:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
      };
    default:
      return state;
  }
};

export default authReducer;
