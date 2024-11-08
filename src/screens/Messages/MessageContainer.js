import React, {memo, useState, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {Constants, Navigation} from '../../utils/Theme';
import {store} from '../../redux/actions/store';
import MessageComponent from './MessageComponent';

const MessageContainer = memo(props => {
  const {navigation} = props;
  const [isLoading, setLoading] = React.useState(false);
  React.useLayoutEffect(() => {
    var notification = store.getState().userSession.notification;
    navigation.titleString = 'Messages';
    navigation.notificationCount = notification;
    navigation.goBackPress = () => {
      navigation.goBack();
    };
    const notificationPress = () => {
      navigation.navigate('NotificationContainer');
    };
    Navigation.accountNavigation(navigation, notificationPress, notification);
  });

  return <MessageComponent props={props} isLoading={isLoading} />;
});

const mapStateToProps = ({userSession}) => ({
  userData: userSession,
});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);
