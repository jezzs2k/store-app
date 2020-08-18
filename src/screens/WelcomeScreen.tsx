import React from 'react';
import {StyleSheet, ImageBackground, View, Image, Text} from 'react-native';

import colors from '../assets/colors/colors';
import AppButton from '../components/Button/AppButton';

const WelComeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/image/hieuEdit.png')}>
      <View style={styles.wrapper}>
        <Image
          resizeMethod="scale"
          style={styles.logo}
          source={{
            uri: 'https://image.flaticon.com/icons/png/512/124/124023.png',
          }}
        />
        <View> 
          <Text style={styles.text_logo}>Sell anything You don't need !!</Text>
        </View>
      </View>

      <View style={styles.containerBtn}>
        <AppButton title="Login" _onPress={() => console.log('Login')} />
        <AppButton
          title="Register"
          color="secondary"
          _onPress={() => console.log('Register')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  wrapper: {
    position: 'absolute',
    top: 70,
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  text_logo: {
    color: colors.while,
    textAlign: 'center',
    fontSize: 22,
  },
  containerBtn: {
    paddingHorizontal: 20,
  },
});

export default WelComeScreen;
