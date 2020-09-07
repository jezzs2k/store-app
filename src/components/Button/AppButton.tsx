import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import colors from '../../assets/colors/colors';

interface IProps {
  title: string;
  _onPress: () => void;
  color?: string;
  width?: any;
}

const AppButton = ({
  title,
  _onPress,
  color = colors.primary,
  width = '100%',
}: IProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color, width: width}]}
      activeOpacity={0.5}
      onPress={_onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: colors.secondary,
    marginVertical: 8,
  },
  text: {
    color: colors.while,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '600',
    fontFamily: 'Roboto',
    paddingVertical: 10,
  },
});

export default AppButton;
