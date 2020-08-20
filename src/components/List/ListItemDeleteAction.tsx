import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../../assets/colors/colors';

interface Props {
  _onPress: () => void;
}

const ListItemDeleteAction = ({_onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={_onPress}
      activeOpacity={0.5}
      style={styles.container}>
      <View style={styles.deleteBtnAction}>
        <AntDesign name="delete" color={colors.danger} size={22} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteBtnAction: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: colors.while,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: {width: 5, height: 3},
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 4,
  },
});

export default ListItemDeleteAction;
