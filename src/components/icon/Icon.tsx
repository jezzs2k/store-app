import React from 'react';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../../assets/colors/colors';

interface Props {
  name: string;
  size?: number;
  color?: string;
  backGroundColor?: string;
  borderRadius?: number;
  _onPress?: () => void;
}

const Icon = ({
  name,
  size = 18,
  color = colors.while,
  backGroundColor = colors.black,
  borderRadius = 0,
  _onPress,
}: Props) => {
  return (
    <View
      style={{
        backgroundColor: backGroundColor,
        width: size * 2,
        height: size * 2,
        borderRadius: borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <AntDesign name={name} color={color} size={size} onPress={_onPress} />
    </View>
  );
};

export default Icon;
