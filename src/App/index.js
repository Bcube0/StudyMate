import React, { memo } from 'react';
import { Platform, UIManager, LogBox } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import RootScreen from '../screens/RootScreen';
import { persistor, store } from '../redux/actions/store';
import OfflineNotice from '../components/OfflineNotice';
import { ModalPortal } from 'react-native-modals';
LogBox.ignoreAllLogs()

if (__DEV__) {
  global.XMLHttpRequest =
    global.originalXMLHttpRequest || global.XMLHttpRequest;
  global.FormData = global.originalFormData || global.FormData;
  fetch;
  if (window.__FETCH_SUPPORT__) {
    window.__FETCH_SUPPORT__.blob = false;
  } else {
    global.Blob = global.originalBlob || global.Blob;
    global.FileReader = global.originalFileReader || global.FileReader;
  }
}

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
enableScreens(true);

const App = memo((props) => (
  <Provider store={store}>
    <SafeAreaProvider>
      <PersistGate persistor={persistor}>
        <RootScreen {...props} />
      </PersistGate>
    </SafeAreaProvider>
    <OfflineNotice />
    <ModalPortal />
  </Provider>
));

export default App;
