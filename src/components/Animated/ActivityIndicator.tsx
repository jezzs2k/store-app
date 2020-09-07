import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import colors from '../../assets/colors/colors';

export default ({visible}: any) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <View style={styles.overlay}></View>
      <LottieView
        source={require('../../assets/animations/lf30_editor_TylDDP.json')}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1080,
    flex: 1,
  },
  overlay: {
    backgroundColor: colors.blackBlur,
    width: '100%',
    height: '100%',
    opacity: 0.1,
  },
});
