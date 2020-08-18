import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import AppText from '../AppText';
import Colors from '../../assets/colors/colors';
interface Props {
  image: string;
  title: string;
  subTitle: string;
}

const Card = ({image, title, subTitle}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.cardDetails}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.while,
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
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
