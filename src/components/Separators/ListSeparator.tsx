import React from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../../assets/colors/colors';

const ListSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.blackLight,
    marginBottom: 18,
    borderRadius: 50,
  },
});

export default ListSeparator;
