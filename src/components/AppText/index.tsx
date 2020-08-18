import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

const AppText = ({children, style}: any) => {
  return <Text style={[styles.container, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  container: {
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontFamily: 'Avenir',
        fontSize: 20,
      },
      android: {
        fontFamily: 'Roboto',
        fontSize: 18,
      },
    }),
  },
});

export default AppText;
