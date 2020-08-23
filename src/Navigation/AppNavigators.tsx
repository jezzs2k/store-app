import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

import FeedNavigators from './FeedNavigators';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountNavigator from './AccountNavigator';
import TabBarButton from './TabBarButton';
import Routes from './Routes';

const Tab = createBottomTabNavigator();

const AppNavigators = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Feeds"
        component={FeedNavigators}
        options={{
          tabBarIcon: ({size, color}) => (
            <AntDesign size={size} color={color} name="home" />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdits"
        component={ListingEditScreen}
        options={({navigation}) => ({
          tabBarButton: () => (
            <TabBarButton
              _onPress={() => navigation?.navigate(Routes.LISTINGS_EDIT_CARD)}
            />
          ),
          tabBarIcon: ({size, color}) => (
            <AntDesign size={size} color={color} name="pluscircleo" />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({size, color}) => (
            <AntDesign size={size} color={color} name="user" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigators;
