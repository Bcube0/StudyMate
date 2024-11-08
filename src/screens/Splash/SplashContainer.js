import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import SplashComponent from './SplashComponent';
import SplashScreen from 'react-native-splash-screen';

const SplashContainer = props => {
  const {navigation, userData} = props;
  useEffect(() => {
    SplashScreen.hide();
    console.log('userData', JSON.stringify(userData));
    if (userData.isUserLoggedin) {
      navigation.navigate('Tab');
    } else {
      if (userData.isUserShowDemo) {
        // navigation.navigate('Demo');
        navigation.navigate('Tab');
      } else {
        // navigation.navigate('Login');
        navigation.navigate('Tab');
      }
    }
  }, []);
  return <SplashComponent props={props} />;
};
const mapStateToProps = ({userSession}) => ({
  userData: userSession,
});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(SplashContainer);
