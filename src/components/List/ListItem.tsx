import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {View, Image, StyleSheet, TouchableHighlight} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {AppText} from '../AppText';
import colors from '../../assets/colors/colors';
import Card from '../cards/card';

interface Props {
  title: string;
  image?: string;
  subTitle?: string;
  _backgroundColor?: string;
  _borderRadius?: number;
  _textColor?: string;
  imageComponent?: any;
  _chevronIcon?: any;
  _renderRightActions?: any;
  _onPress?: () => void;
}

const ListItem = ({
  title,
  image,
  subTitle,
  _backgroundColor = colors.while,
  _borderRadius = 0,
  _textColor = colors.black,
  _chevronIcon,
  imageComponent,
  _onPress,
  _renderRightActions,
}: Props) => {
  return (
    <Swipeable renderRightActions={_renderRightActions}>
      <TouchableHighlight underlayColor={colors.while} onPress={_onPress}>
        <View
          style={[
            styles.container,
            {backgroundColor: _backgroundColor, borderRadius: _borderRadius},
          ]}>
          <View style={styles.listDetail}>
            {imageComponent && imageComponent}
            {image && (
              <Image
                style={styles.image}
                source={{
                  uri: image,
                }}
              />
            )}
            <View style={styles.textWrap}>
              <AppText
                style={[styles.title, {color: _textColor}]}
                _numberOfLine={1}>
                {title}
              </AppText>
              {subTitle && (
                <AppText style={styles.subTitle} _numberOfLine={2}>
                  {subTitle}
                </AppText>
              )}
            </View>
            <View style={styles.chevronBtn}>
              {_chevronIcon && (
                <AntDesign
                  name={_chevronIcon}
                  color={colors.medium}
                  size={20}
                />
              )}
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    shadowColor: colors.black,
    shadowOffset: {width: 3, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 6,
    marginVertical: 8,
  },
  listDetail: {
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    marginRight: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colors.while,
  },
  textWrap: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    color: colors.while,
    fontWeight: '700',
  },
  subTitle: {
    color: colors.medium,
    fontSize: 16,
  },
  chevronBtn: {
    justifyContent: 'center',
  },
});
export default ListItem;
