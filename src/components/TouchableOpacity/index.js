import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
const Touchable = props => {
  return (
    <View style={{marginTop: 20,justifyContent:"flex-end"}}>
      <TouchableOpacity onPress={props.onPressSubmit} style={styles.submitButton}>
        <Text style={styles.submitText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Touchable;
