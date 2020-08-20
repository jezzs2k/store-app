import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {AppText} from './index';

interface Props {
  item: any;
  _onPress: () => void;
}

const PickerItem = ({item, _onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={_onPress}>
      <AppText>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
  },
});

export default PickerItem;
