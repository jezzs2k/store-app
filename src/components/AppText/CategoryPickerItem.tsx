import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import {AppText} from './index';
import Icon from '../icon/Icon';

interface Props {
  item: any;
  _onPress: () => void;
}

const CategoryPickerItem = ({item, _onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={_onPress}>
      <Icon backGroundColor={item.backGroundColor} name={item.name} />
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '33%',
    marginTop: 20,
  },
  text: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 16,
  },
});

export default CategoryPickerItem;
