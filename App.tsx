/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';

const App = () => {
  const orientation = useDeviceOrientation();
  console.log(useDimensions());
  return (
    <View
      style={{
        backgroundColor: 'dodgerblue',
        flexBasis: 100,
        flex: -1,
        flexShrink: 1,
        height: 100,
        alignContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'red',
          width: 100,
          height: 100,
        }}></View>
      <View
        style={{
          backgroundColor: 'blue',
          width: 100,
          height: 100,
        }}></View>
      <View
        style={{
          backgroundColor: 'orange',
          width: 100,
          height: 100,
        }}></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
