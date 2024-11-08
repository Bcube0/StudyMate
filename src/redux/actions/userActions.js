import {
  SAVEUSER,
  SET_DEMO_SESSION,
  SET_USER_SESSION,
  SAVEPASS,
  CLEAR_USER_SESSION,
  API_HOME_SCREEN,
} from '../types';
import Constants from '../../utils/Constants';
import axios from 'axios';
import {store} from '../../redux/actions/store';

export const setDemoSession = () => ({
  type: SET_DEMO_SESSION,
});

export const setUserSession = () => ({
  type: SET_USER_SESSION,
});

export const clearUserSession = () => ({
  type: CLEAR_USER_SESSION,
});

export const saveUserData = params => ({
  type: SAVEUSER,
  payload: params,
});

export const savePass = params => ({
  type: SAVEPASS,
  payload: params,
});

export const apiHomeScreen = userID => ({
  types: API_HOME_SCREEN,
  payload: {
    client: 'default',
    request: {
      url: `/frontend/dashboard`,
      method: 'get',
    },
  },
});
