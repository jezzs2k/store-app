import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import Card from '../components/cards/card';
import ListSeparator from '../components/Separators/ListSeparator';

const Listings = [
  {
    id: 1,
    title: 'T-shirt for bad boy',
    price: '$100',
    image:
      'https://image.freepik.com/free-photo/young-handsome-happy-smiling-man-listening-music-headphones-isolated-white-studio-background-wearing-shirt-sunglasses_285396-1547.jpg',
  },
  {
    id: 2,
    title: 'Pant blue very beautifully',
    price: '$100',
    image:
      'https://image.freepik.com/free-photo/portrait-serious-blonde-girl-city-centre-dressed-up-jeans-suite-white-t-shirt-black-hat_231208-4388.jpg',
  },
];

const ListingsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Listings}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item}) => (
          <Card title={item.title} image={item.image} subTitle={item.price} />
        )}
        ItemSeparatorComponent={ListSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default ListingsScreen;
