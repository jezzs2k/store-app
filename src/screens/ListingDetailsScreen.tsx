import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text, ScrollView, RefreshControl, } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { AppText } from '../components/AppText';
import colors from '../assets/colors/colors';
import LisItem from '../components/List/ListItem';
import { Message } from '../api/messages';

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
  const observer: any = useRef();
  const [isFocus, setFocus] = useState(false);
  const [messages, setMessage]: any[] = useState([]);
  const [refreshing, setRefresh] = useState(false);

  const onChangeText = (text: string) => {  
    isFocus && setFocus(false);
    isFocus && observer.current?.scrollToEnd({ animated: true});
    SetChangeComment(text);
  };

  const handleSendComment = async () => {
   const data = await messageAction.sendMessage({ listingId: listing.id, message: valueComment });
   data?.message?.status === "ok" ?  getMessage() : null;
    SetChangeComment('');
  };

  const getMessage = async () => {
    const data = await messageAction.getMessage(listing.id);
    data.length > 0 && setMessage([...data])
  }

  useEffect(() => {
    getMessage();
  }, [])

  const onRefresh = useCallback(() => {
    setRefresh(true);
    getMessage();

    setTimeout(() => {
      setRefresh(false)
    }, 2000)
  },[])

  return (
    <ScrollView style={styles.ListingDetail} ref={observer}  refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
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
      {messages.length > 0 && messages.map((item:any) => <LisItem
        key={item?.id}
        title={item?.message}
        _styleImage={{
          width: 30,
          height: 30,
        }}
        _styleList={{
          paddingHorizontal: 5,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0,
          shadowRadius: 0,
          elevation: 0,
          marginVertical: 0,
        }}
        _styleTitle={{
          fontSize: 16,
          fontWeight: "600"
        }}
      />)}
        <View style={styles.comment}>
          <TextInput onFocus={() => setFocus(true)} style={{ paddingRight: 80, paddingLeft: 10, color: colors.black }} value={valueComment} onChangeText={onChangeText} placeholder={"Write comment..."} />
          <TouchableOpacity style={styles.btnSendComment} onPress={handleSendComment} activeOpacity={0.5}>
            <Text style={styles.commentTextStyleBtn}>Send</Text>
          </TouchableOpacity>
        </View>
      {/* <AppButton
        title="Messages"
        color={colors.redLight}
        _onPress={() =>
          navigation.navigate('Account', {screen: 'Messages', initial: false})
        }
      /> */}
     
    </ScrollView>
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
  commentText:{
    width: "100%",
    height: 50
  },
  comment: {
    width: "100%",
    height: 40,
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.while,
    borderWidth: 1,
    borderColor: colors.lightMinium,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginVertical: 30
  },
  btnSendComment: {
    position: "absolute",
    right: 0,
    height: 40,
    zIndex: 10,
    justifyContent: "center",
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
