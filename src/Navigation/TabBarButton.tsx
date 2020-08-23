import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../assets/colors/colors';

const TabBarButton = ({_onPress}: any) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={_onPress}>
      <View style={styles.container}>
        <AntDesign size={35} color={colors.while} name="pluscircleo" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    bottom: 30,
    borderWidth: 10,
    borderColor: colors.while,
  },
});

export default TabBarButton;
