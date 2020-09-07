import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import Card from '../components/cards/card';
import ListSeparator from '../components/Separators/ListSeparator';
import {ListingsFactory} from '../api/listings';
import colors from '../assets/colors/colors';
import ActivityIndicator from '../components/Animated/ActivityIndicator';
const listingsFactory = new ListingsFactory();

type RootStackParamList = {
  Details: {listing: any};
  Account: {screen: string; initial: boolean};
};
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;
type Props = {
  navigation: ProfileScreenNavigationProp;
  routes: ProfileScreenRouteProp;
};

const ListingsScreen = ({navigation}: Props) => {
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

  return (
    <>
      <ActivityIndicator visible={loading} />
      <View style={styles.container}>
        <FlatList
          data={Listings}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => (
            <Card
              title={item.title}
              imageUrl={item?.images[0]?.url}
              subTitle={item.price}
              _onPress={() =>
                navigation?.navigate('Details', {
                  listing: {...item},
                })
              }
            />
          )}
          ItemSeparatorComponent={ListSeparator}
          refreshing={loading}
          onRefresh={fetchData}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
});

export default ListingsScreen;
