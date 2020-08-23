import React from 'react';
import {View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import {AppText} from '../AppText';
import Colors from '../../assets/colors/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  imageUrl: string;
  title: string;
  subTitle: string;
  _onPress: () => void;
}

const Card = ({imageUrl, title, subTitle, _onPress}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={_onPress}
      style={styles.container}>
      <View>
        <FastImage
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        />
        <View style={styles.cardDetails}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}$</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.while,
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardDetails: {
    marginVertical: 10,
    paddingHorizontal: 8,
  },
  title: {
    textTransform: 'capitalize',
  },
  subTitle: {
    color: Colors.primary,
    fontWeight: '700',
  },
});

export default Card;
