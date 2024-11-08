import React, {memo, useState, useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import {useRoute, useFocusEffect} from '@react-navigation/native';
import {Alert, BackHandler} from 'react-native';
import {store} from '../../redux/actions/store';
import moment from 'moment';
import CreateNoteComponent from './CreateNoteComponent';
import {useIsFocused} from '@react-navigation/native';
import {Constants, Images, Navigation, ShowAlert} from '../../utils/Theme';

const CreateNoteContainer = memo(props => {
  const {navigation} = props;
  const isFocused = useIsFocused();
  const [isLoading, setLoading] = React.useState(false);

  const route = useRoute();
  const [userData, setUserData] = useState('');

  // React.useLayoutEffect(() => {
  //   var notification = store.getState().userSession.notification;
  //   navigation.titleString = 'Create';
  //   navigation.notificationCount = notification;
  //   navigation.goBackPress = () => {
  //     navigation.goBack();
  //   };
  //   const notificationPress = () => {
  //     navigation.navigate('NotificationContainer');
  //   };
  //   Navigation.accountNavigation(navigation, notificationPress, notification);
  // });

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (route.name === 'HomeContainer') {
          BackHandler.exitApp();
          return true;
        } else {
          return false;
        }
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [route]),
  );

  React.useEffect(() => {
    if (isFocused) {
    }
  }, [isFocused]);

  return (
    <CreateNoteComponent
      props={props}
      isLoading={isLoading}
      userData={userData}
    />
  );
});

const mapStateToProps = ({userSession}) => ({
  userData: userSession,
});
const mapDispatchToProps = dispatch => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateNoteContainer);
