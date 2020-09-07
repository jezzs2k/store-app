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
import CommentItem from './src/components/comments/comment'

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

  return (
    // <AuthContext.Provider value={{user, setUser, token, setToken}}>
    //   <OfflineNetWorkNotice />
    //   {!loading ? (
    //       <NavigationContainer theme={NavigationTheme}>
    //         {!token ? <AuthNavigators /> : <AppNavigator />}
    //       </NavigationContainer>
    //     ) : null}
    //   </AuthContext.Provider>
    // );

    <CommentItem />
  )
}

export default App;
