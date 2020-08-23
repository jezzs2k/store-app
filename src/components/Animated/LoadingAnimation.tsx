import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color="#00ff00" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
