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
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import WelComeScreen from './src/screens/WelcomeScreen';

//Navigators
import AuthNavigators from './src/Navigation/AuthNavigators';
import NavigationTheme from './src/Navigation/NavigationTheme';

// type RootStackParamList = {
//   Details: {id: string; otherParam: string};
// };

// type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
// type ProfileScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'Details'
// >;

// type Props = {
//   route: ProfileScreenRouteProp;
//   navigation: ProfileScreenNavigationProp;
// };

const App = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AuthNavigators />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
