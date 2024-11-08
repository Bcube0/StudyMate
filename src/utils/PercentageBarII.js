import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from './Theme';

const PercentageBarII = ({ percentage }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.bar, { width: `${percentage}%` }]} />
      <Text style={styles.percentageText}>{`${percentage}%`}</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    height: 18,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    overflow: 'hidden',    
    backgroundColor: "#ccc",
    marginTop:20
  },
  bar: {
    height: '100%',
    backgroundColor: Colors.Main, // Green color for the filled portion
    borderRadius: 10,
  },
  percentageText: {
    marginLeft: 5,
    color: '#333',
    fontSize: 13
  },
});

export default PercentageBarII;
