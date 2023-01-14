import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_ROLE,
  SET_LOGOUT,
  SET_VERIFIED,
  SET_LAST_LOGIN,
  SET_EMAIL,
  SET_FIRST_NAME,
  SET_LAST_NAME,
} from "../actionType";
const INIT_STATE = {
  // username: null,
  user: null,
  role: null,
  email: null,
  first_name: null,
  last_name: null,
  authenticated: false,
  verified: false,
  lastLogin: null,
};

export default (state = INIT_STATE, action) => {
  // console.log("action", action);
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: action.payload.authenticated,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case SET_ROLE: {
      localStorage.setItem("role", action.payload.role);
      return {
        ...state,
        role: action.payload.role,
      };
    }

    // case SET_EMAIL: {
    //   localStorage.setItem("email", action.payload.email);

    //   return {
    //     ...state,
    //     email: action.payload.email,
    //   };
    // }

    // case SET_FIRST_NAME: {
    //   localStorage.setItem("first_name", action.payload.first_name);

    //   return {
    //     ...state,
    //     first_name: action.payload.first_name,
    //   };
    // }

    // case SET_LAST_NAME: {
    //   localStorage.setItem("last_name", action.payload.last_name);
    //   return {
    //     ...state,
    //     last_name: action.payload.last_name,
    //   };
    // }

    case SET_LOGOUT:
      return {
        ...state,
        user: action.payload.user,
        authenticated: action.payload.authenticated,
      };
    case SET_VERIFIED:
      // console.log("state", action.payload.verified);
      return {
        ...state,
        verified: action.payload.verified,
      };
    case SET_LAST_LOGIN:
      return {
        ...state,
        lastLogin: action.payload.lastLogin,
      };
    default:
      return state;
  }
};

// export default reducer;
