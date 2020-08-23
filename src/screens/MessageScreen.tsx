import React, {useState} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';

import ListItem from '../components/List/ListItem';
import ListSeparator from '../components/Separators/ListSeparator';
import ListItemDeleteAction from '../components/List/ListItemDeleteAction';
import colors from '../assets/colors/colors';
const initialMessage = [
  {
    id: 1,
    title: 'D!',
    description: 'T!',
    image:
      'https://image.freepik.com/free-photo/full-length-image-excited-woman-jumping-with-happy-face-expression-yellow_273443-2002.jpg',
  },
  {
    id: 2,
    title: 'D@',
    description: 'T@',
    image:
      'https://image.freepik.com/free-photo/studio-image-cute-female-teenager-with-two-funny-bunches-holding-diary-pensil-hands-looking-directly_176532-9203.jpg',
  },
];

const MessageScreen = () => {
  const [messages, setMessage] = useState(initialMessage);
  const [_refreshing, setRefreshing] = useState(false);
  const handleDelete = (id: number) => {
    setMessage((messages: any) => {
      return messages.filter((item: any) => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item}: any) => (
          <ListItem
            title={item.title}
            image={item.image}
            subTitle={item.description}
            _backgroundColor={colors.pinkLight}
            _textColor={colors.while}
            _borderRadius={25}
            _onPress={() => console.log('Handling Selections')}
            _renderRightActions={() => (
              <ListItemDeleteAction _onPress={() => handleDelete(item.id)} />
            )}
            key={`${item.id}`}
          />
        )}
        ItemSeparatorComponent={ListSeparator}
        refreshing={_refreshing}
        onRefresh={() => {
          setMessage((messages: any) => {
            return [
              {
                id: 3,
                title: 'C@',
                description: 'P@',
                image:
                  'https://image.freepik.com/free-photo/cropped-image-woman-training-outdoors-tracking-her-fitness-route-cell-phone_273609-6170.jpg',
              },
            ];
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MessageScreen;
