import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {applyMiddleware, createStore, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {multiClientMiddleware} from 'redux-axios-middleware';
import axios from 'axios';
import reducers, {persistWhitelist} from '../reducers';
import {Constants} from '../../utils/Theme';
import {CLEAR_USER_SESSION} from '../types';
import * as RootNavigation from '../../utils/rootNavigation.js';
import {CommonActions} from '@react-navigation/native';
import {Alert} from 'react-native';

var middleware = [];
axios.defaults.timeout = 1000 * 60;
const defaultClient = axios.create({
  baseURL: Constants.baseUrl,
  responseType: 'json',
});

defaultClient.interceptors.request.use(async config => {
  const savedToken = await AsyncStorage.getItem('tokenData');
  console.log('TokenNew', savedToken);
  let token = '';
  if (savedToken) {
    const Token = JSON.parse(savedToken);
    token = Token?.token;
  }

  if (token) {
    Object.assign(config, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return config;
});

const clients = {
  default: {
    client: defaultClient,
  },
};

const axiosMiddleware = multiClientMiddleware(clients, {
  returnRejectedPromiseOnError: true,
  interceptors: {
    response: [
      {
        error: async ({dispatch}, error) => {
          if (
            error.response &&
            (error.response.status === 401 || error.response.status === 403)
          ) {
          }
          return Promise.reject(error);
        },
      },
    ],
  },
});

middleware.push(thunk);
middleware.push(axiosMiddleware);

if (__DEV__) {
  const {createLogger} = require('redux-logger');
  const loggerConfig = {
    collapsed: (getState, action, logEntry) => !logEntry.error,
    duration: true,
    diff: true,
  };
  const loggerMiddleware = createLogger(loggerConfig);
  middleware.push(loggerMiddleware);
}

const persistConfig = {
  version: 0,
  key: 'root',
  storage: AsyncStorage,
  whitelist: persistWhitelist,
  timeout: 1000,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  __DEV__
    ? composeWithDevTools(applyMiddleware(...middleware))
    : compose(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);
