import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import Icon from '../components/icon/Icon';
import ListItem from '../components/List/ListItem';
import ListSeparator from '../components/Separators/ListSeparator';
import colors from '../assets/colors/colors';

type ProfileScreenNavigationProp = StackNavigationProp<any>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const MenuItems = [
  {
    id: 1,
    title: 'My messages',
    icon: {
      name: 'mail',
      color: colors.while,
      backgroundColor: colors.primary,
    },
    targetScreen: 'Messages',
  },
  {
    id: 2,
    title: 'My Listings',
    icon: {
      name: 'menuunfold',
      color: colors.while,
      backgroundColor: colors.secondary,
    },
    targetScreen: 'Listings_basic',
  },
];

const AccountScreen = ({navigation}: Props) => {
  return (
    <View>
      <View style={styles.container}>
        <ListItem
          title="Vu Thanh Hieu"
          subTitle="jezzs2k@gmail.com"
          image="https://image.freepik.com/free-photo/amazed-fashionable-guy-red-hat-keeps-mouth-widely-opened-stares-aside-indicates-with-fore-finger-blank-copy-space-shows-something-strange_273609-3816.jpg"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={MenuItems}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              imageComponent={
                <Icon
                  name={item.icon.name}
                  color={item.icon.color}
                  backGroundColor={item.icon.backgroundColor}
                  borderRadius={50}
                />
              }
              key={`${item.id}`}
              _onPress={() => navigation?.navigate(`${item.targetScreen}`)}
            />
          )}
          ItemSeparatorComponent={ListSeparator}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Logout"
          _borderRadius={25}
          _backgroundColor={colors.redLight}
          _textColor={colors.while}
          _onPress={() => console.log('Logout')}
          imageComponent={
            <Icon
              name="logout"
              color={colors.black}
              backGroundColor={colors.while}
              borderRadius={50}
            />
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
