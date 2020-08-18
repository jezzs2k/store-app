import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import AppText from '../AppText';
import colors from '../../assets/colors/colors';

interface Props {
  title: string;
  image: string;
  subTitle: string;
}

const ListItem = ({title, image, subTitle}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.listDetail}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.pinkLight,
    borderRadius: 25,
    shadowColor: colors.black,
    shadowOffset: {width: 4, height: 3},
    shadowOpacity: 0.4,
  },
  listDetail: {
    paddingVertical: 8,
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
    borderWidth: 3,
    borderColor: colors.while,
  },
  title: {
    color: colors.while,
    fontWeight: '700',
  },
  subTitle: {
    color: colors.medium,
  },
});
export default ListItem;
