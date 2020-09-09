/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { useState, useEffect } from 'react';
import { Image, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import AuthNavigators from './src/Navigation/AuthNavigators';
import NavigationTheme from './src/Navigation/NavigationTheme';
import AppNavigator from './src/Navigation/AppNavigators';
import OfflineNetWorkNotice from './src/components/Networking/OffliceNetWorkNotice';
import AuthContext from './src/Authcontext/authContext';
import { getTokenStore } from './src/Authcontext/StoreToken';
import { User } from './src/api/User';
var PushNotification = require("react-native-push-notification");

const userMethod = new User();
const App = () => {
  const [user, setUser]: any = useState(null);
  const [token, setToken]: any = useState(null);
  const [loading, setLoading]: any = useState(false);

  const checkToken = async () => {
    setLoading(true);
    const token = await getTokenStore();
    setLoading(false);
    setToken(token);
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (token) {
      userMethod
        .getUsers(token)
        .then((res) => {
          setUser(() => ({ ...res.user }));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);



// // Must be outside of any component LifeCycle (such as `componentDidMount`).
// PushNotification.configure({
//   // (optional) Called when Token is generated (iOS and Android)
//   onRegister: function (token) {
//     console.log("TOKEN:", token);
//   },

//   // (required) Called when a remote is received or opened, or local notification is opened
//   onNotification: function (notification) {
//     console.log("NOTIFICATION:", notification);

//     // process the notification

//     // (required) Called when a remote is received or opened, or local notification is opened
//     notification.finish(PushNotificationIOS.FetchResult.NoData);
//   },

//   // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
//   onAction: function (notification) {
//     console.log("ACTION:", notification.action);
//     console.log("NOTIFICATION:", notification);

//     // process the action
//   },

//   // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
//   onRegistrationError: function(err) {
//     console.error(err.message, err);
//   },

//   // IOS ONLY (optional): default: all - Permissions to register.
//   permissions: {
//     alert: true,
//     badge: true,
//     sound: true,
//   },

//   // Should the initial notification be popped automatically
//   // default: true
//   popInitialNotification: true,

//     /**
//      * (optional) default: true
//      * - Specified if permissions (ios) and token (android and ios) will requested or not,
//      * - if not, you must call PushNotificationsHandler.requestPermissions() later
//      * - if you are not using remote notification or do not have Firebase installed, use this:
//      *     requestPermissions: Platform.OS === 'ios'
//      */
//     requestPermissions: true,
//   });

  return (
    <AuthContext.Provider value={{user, setUser, token, setToken}}>
      <OfflineNetWorkNotice />
      {!loading ? (
          <NavigationContainer theme={NavigationTheme}>
            {!token ? <AuthNavigators /> : <AppNavigator />}
          </NavigationContainer>
        ) : null}
      </AuthContext.Provider>
  )
}

export default App;
