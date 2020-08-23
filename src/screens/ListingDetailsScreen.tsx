import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {AppText} from '../components/AppText';
import colors from '../assets/colors/colors';
import LisItem from '../components/List/ListItem';
import AppButton from '../components/Button/AppButton';

type RootStackParamList = {
  Details: {listing: any};
  Account: {screen: string; initial: boolean};
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const ListingDetailsScreen = ({route, navigation}: Props) => {
  const {listing} = route.params;

  return (
    <View style={styles.ListingDetail}>
      <Image
        style={styles.image}
        source={{
          uri: listing.images[0].url,
        }}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing?.title}</AppText>
        <AppText style={styles.price}>{listing?.price}$</AppText>
      </View>
      <View style={styles.userContainer}>
        <LisItem
          title="Vu Thanh Hieu"
          image="https://image.freepik.com/free-photo/winning-success-man-happy-ecstatic-celebrating-being-winner-dynamic-energetic-image-male-model_155003-9259.jpg"
          subTitle="5 listings"
        />
      </View>
      <AppButton
        title="To Message"
        color={'redLight'}
        _onPress={() =>
          navigation.navigate('Account', {screen: 'Messages', initial: false})
        }
      />
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
  btn_text: {},
});

export default ListingDetailsScreen;
