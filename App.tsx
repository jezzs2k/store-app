/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import MessageScreen from './src/screens/MessageScreen';
import Icon from './src/components/icon/Icon';
import ListItem from './src/components/List/ListItem';
import colors from './src/assets/colors/colors';
import AccountScreen from './src/screens/AccountScreen';
import ListingsScreen from './src/screens/ListingsScreen';
import AppTextInput from './src/components/AppText/AppTextInput';
import AppPicker from './src/components/AppText/AppPicker';
import LoginScreen from './src/screens/LoginScreen';
import ListingEditScreen from './src/screens/ListingEditScreen';

const App = () => {
  return <ListingEditScreen />;
};

const styles = StyleSheet.create({});

export default App;
