import React from 'react';
import {View, StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

import {AppText} from '../AppText';
import colors from '../../assets/colors/colors';

const NetWorkNotice = () => {
  return !NetInfo.useNetInfo().isConnected ? (
    <View style={styles.container}>
      <AppText
        style={{
          color: colors.while,
          fontWeight: '600',
          fontSize: 14,
        }}>
        Not connect ...
      </AppText>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.danger,
  },
});

export default NetWorkNotice;
