import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { AppText } from '../components/AppText';
import colors from '../assets/colors/colors';
import LisItem from '../components/List/ListItem';
import AppButton from '../components/Button/AppButton';
import { Message } from '../api/messages'

const messageAction = new Message();

type RootStackParamList = {
  Details: { listing: any };
  Account: { screen: string; initial: boolean };
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

const ListingDetailsScreen = ({ route, navigation }: Props) => {
  const { listing } = route.params;
  const [valueComment, SetChangeComment] = useState('');

  const onChangeText = (text: string) => {
    SetChangeComment(text);
  };

  const handleSendComment = () => {
    messageAction.sendMessage({ listingId: listing.id, message: valueComment });
    SetChangeComment('')
  };

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
      {/* <AppButton
        title="Messages"
        color={colors.redLight}
        _onPress={() =>
          navigation.navigate('Account', {screen: 'Messages', initial: false})
        }
      /> */}
      <View style={styles.comment}>
        <TextInput style={{ paddingRight: 80, paddingLeft: 10, color: colors.black }} value={valueComment} onChangeText={onChangeText} placeholder={"Write comment..."} />
        <TouchableOpacity style={styles.btnSendComment} onPress={handleSendComment} activeOpacity={0.5}>
          <Text style={styles.commentTextStyleBtn}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ListingDetail: {
    height: '100%',
  },
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
  comment: {
    position: 'absolute',
    bottom: 30,
    width: "100%",
    height: 50,
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.while,
    borderWidth: 1,
    borderColor: colors.lightMinium,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  btnSendComment: {
    position: "absolute",
    right: 0,
    justifyContent: "center",
    height: 51,
    zIndex: 10,
    backgroundColor: colors.blueLight,
    paddingHorizontal: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  commentTextStyleBtn: {
    color: colors.while
  }
});

export default ListingDetailsScreen;
