import React, {memo} from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';
const SplashComponent = memo(props => {
  return (
    <View style={styles.container}>
        <ActivityIndicator style={styles.img_bg} />
    </View>
  );
});

export default SplashComponent;
