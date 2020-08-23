import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessageScreen';
import ListingBasicInfo from '../screens/ListingBasicInfo';

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Messages" component={MessagesScreen} />
      <Stack.Screen
        name="Listings_basic"
        component={ListingBasicInfo}
        options={{headerTitle: 'About listings'}}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
