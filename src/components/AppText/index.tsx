import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

import AppTextInput from './AppTextInput';
import AppPicker from './AppPicker';
import PickerItem from './PickerItem';
import CategoryPickerItem from './CategoryPickerItem';

const AppText = ({children, style, _numberOfLine}: any) => {
  return (
    <Text style={[styles.container, style]} numberOfLines={_numberOfLine}>
      {children}
    </Text>
  );
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

export {AppText, AppTextInput, AppPicker, PickerItem, CategoryPickerItem};
