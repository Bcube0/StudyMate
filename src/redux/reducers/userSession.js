import {
  SAVEUSER,
  SET_DEMO_SESSION,
  SET_USER_SESSION,
  CLEAR_USER_SESSION,
} from '../types';

const initialData = {
  isUserShowDemo: true,
  isUserLoggedin: false,
  user_data: null,
  token: null,
  user_email: '',
  user_password: '',
  rememberMe: false,
  user_profile: null,
};

export default (state = initialData, action) => {
  switch (action.type) {
    case SET_DEMO_SESSION:
      return {
        ...state,
        isUserShowDemo: false,
      };
    case SET_USER_SESSION:
      return {
        ...state,
        isUserLoggedin: true,
      };

    case CLEAR_USER_SESSION:
      return {
        ...state,
        isUserLoggedin: false,
      };
    case SAVEUSER:
      return {
        ...state,
        user_data: action?.payload?.data?.data?.data,
      };
    default:
      return state;
  }
};
