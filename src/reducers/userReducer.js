import {
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
} from "../actions/types";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS_PENDING:
      return {
        ...state,
        loading: true,
        error: "",
        users: [],
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload.error.message,
        users: []
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        users: payload.data.data.data,
      };
    default:
      return state;
  }
};

export default userReducer;
