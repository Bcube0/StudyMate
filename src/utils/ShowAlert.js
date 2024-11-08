import {Platform, Alert} from 'react-native';
import Constants from './Constants';
export default ShowAlert = props => {
  setTimeout(() => {
    Alert.alert(props?.title ?? Constants.appName, props?.message, [{text: 'OK', onPress: () => {}}]);
  }, 100);
};
export const isIOS = () => {
  var result = false;
  Platform.OS === 'ios' ? (result = true) : (result = false);
  return result;
};
