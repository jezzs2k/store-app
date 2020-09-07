import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelComeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const AuthStack = createStackNavigator();

export default () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name="WelCome"
        component={WelComeScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={({route}: any) => ({title: route?.params?.name})}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={({route}: any) => ({title: route?.params?.name})}
      />
    </AuthStack.Navigator>
  );
};
