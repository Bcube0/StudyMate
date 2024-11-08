import {combineReducers} from 'redux';
import userSession from './userSession';

export const persistWhitelist = ["userSession"];
export default combineReducers({
 userSession
});
