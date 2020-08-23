import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, View, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import ListingItem from '../components/List/ListItem';
import colors from '../assets/colors/colors';
import {ListingsFactory} from '../api/listings';
import LoadingAnimation from '../components/Animated/LoadingAnimation';

const listingsFactory = new ListingsFactory();

type RootStackParamList = {
  Details: {listing: any};
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const ListingBasicInfo = ({navigation}: Props) => {
  const [Listings, setListings]: any = useState([]);
  const [error, setError]: any = useState(false);
  const [loading, serLoading]: any = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      serLoading(true);
      const res = await listingsFactory.getListings();
      serLoading(false);
      if (!res.ok) {
        setError(true);
        return;
      }

      setError(false);

      setListings(res?.data.sort(() => -1));
    } catch (error) {
      console.log(error);
    }
  };

  if (error) {
    return (
      <Button title={'Retry'} onPress={fetchData} color={colors.secondary} />
    );
  }
  return loading ? (
    <LoadingAnimation />
  ) : (
    <View style={styles.container}>
      <FlatList
        data={Listings}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item}) => (
          <ListingItem
            title={item.title}
            subTitle={item.price}
            _backgroundColor={colors.while}
            _textColor={colors.danger}
            _borderRadius={50}
            _chevronIcon="enter"
            _onPress={() => navigation.navigate('Details', {listing: item})}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ListingBasicInfo;
