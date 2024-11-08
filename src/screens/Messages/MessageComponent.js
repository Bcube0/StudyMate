import React, {memo} from 'react';
import {TouchableOpacity, FlatList, Text, View} from 'react-native';
import styles from './styles';
import Loader from '../../components/Loader';
import {Colors, Images, Fonts} from '../../utils/Theme';

const MessageComponent = memo(props => {
  return (
    <View style={styles.container}>
      <Loader loading={props.isLoading} />
      <Text>{'dagdgaidgboaibdo'}</Text>
    </View>
  );
});

export default MessageComponent;
