import analytics from '@react-native-firebase/analytics';
import {
  API_ALL_LIST_APPOINTMENTS,
  API_CLIENT_LIST_FOR_SC,
  API_NOTIFICATION_LIST,
  API_SC_INVOICE_LIST,
  API_SC_TIME_SHEET_LIST,
  API_SERVICE_TASKS_LIST,
  API_WEIGHT_LIST,
} from '../redux/types';
export function log(name, params) {
  analytics().setAnalyticsCollectionEnabled(true);
  analytics().logEvent(name, {
    ...params,
  });
}
export function logScreenView({screen_name, screen_class}) {
  analytics().setAnalyticsCollectionEnabled(true);
  analytics().logScreenView({screen_name, screen_class});
  // analytics().logEvent(screen_name, {});
}
export function setUserId(params) {
  analytics().setAnalyticsCollectionEnabled(true);
  analytics().setUserId(params);
}
export const ActionTaken = {
  USER_LOGIN: 'USER_LOGIN',
  API_ALL_LIST_APPOINTMENTS: 'API_ALL_LIST_APPOINTMENTS',
  API_NOTIFICATION_LIST: 'API_NOTIFICATION_LIST',
  API_WEIGHT_LIST: 'API_WEIGHT_LIST',
  API_GET_VIEW_GOAL_TASK_DETAILS: 'API_GET_VIEW_GOAL_TASK_DETAILS',
  API_SERVICE_TASKS_LIST: 'API_SERVICE_TASKS_LIST',
  API_SC_TIME_SHEET_LIST: 'API_SC_TIME_SHEET_LIST',
  API_SC_INVOICE_LIST: 'API_SC_INVOICE_LIST',
  API_CLIENT_LIST_FOR_SC: 'API_CLIENT_LIST_FOR_SC',
  API_SC_SERVICE_TASK: 'API_SC_SERVICE_TASK',
};

export const ScreenName = {
  WeightContainer: 'WeightScreen',
  NotificationContainer: 'NotificationScreen',
};
