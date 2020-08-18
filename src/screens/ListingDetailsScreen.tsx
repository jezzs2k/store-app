import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import AppText from '../components/AppText';
import colors from '../assets/colors/colors';
import LisItem from '../components/List/ListItem';

const ListingDetailsScreen = () => {
  return (
    <View style={styles.ListingDetail}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://image.freepik.com/free-photo/pleased-redhead-girl-thinking-making-right-choice_176420-19266.jpg',
        }}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jack don't sell</AppText>
        <AppText style={styles.price}>$400</AppText>
      </View>
      <View style={styles.userContainer}>
        <LisItem
          title="Vu Thanh Hieu"
          image="https://image.freepik.com/free-photo/winning-success-man-happy-ecstatic-celebrating-being-winner-dynamic-energetic-image-male-model_155003-9259.jpg"
          subTitle="5 listings"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ListingDetail: {},
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    marginTop: 8,
  },
  userContainer: {
    marginVertical: 30,
  },
});

export default ListingDetailsScreen;
