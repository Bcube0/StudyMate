import crashlytics from '@react-native-firebase/crashlytics';
export function log(name,params) {
    crashlytics().setCrashlyticsCollectionEnabled(true);
    crashlytics().log(name);
  
}

export function logError(error) {
    crashlytics().setCrashlyticsCollectionEnabled(true);
    crashlytics().recordError(new Error(error));
  
}

export function setUserId(params) {
    crashlytics().setCrashlyticsCollectionEnabled(true);
    crashlytics().setUserId(params)
}

export function setAttributes(name,params) {
    crashlytics().setCrashlyticsCollectionEnabled(true);
    crashlytics().setAttributes({ name, params })
}

export const EventNames = {
    user_normal_login: "user normal logged In Successfully",
    user_login: "user_login",
    user_apple_login: "user_normal_login",
    send_otp: "send_otp",
    create_event: "create_event",
    finalize_event: "finalize_event",




}