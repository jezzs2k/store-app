import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../assets/colors/colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapButton}>
        <View style={styles.closeButton}>
          <AntDesign name="close" color={colors.while} size={35} />
        </View>
        <View style={styles.deleteButton}>
          <AntDesign name="delete" color={colors.while} size={30} />
        </View>
      </View>
      <Image
        blurRadius={0.5}
        resizeMode="contain"
        style={styles.image}
        source={{
          uri:
            'https://image.freepik.com/free-photo/vintage-furniture_74190-4033.jpg',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  wrapButton: {
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    left: 15,
    top: 30,
  },
  deleteButton: {
    position: 'absolute',
    right: 15,
    top: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;
