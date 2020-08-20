import React from 'react';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../../assets/colors/colors';

interface Props {
  name: string;
  size?: number;
  color?: string;
  backGroundColor?: string;
}

const Icon = ({
  name,
  size = 18,
  color = colors.while,
  backGroundColor = colors.black,
}: Props) => {
  return (
    <View
      style={{
        backgroundColor: backGroundColor,
        width: size * 2,
        height: size * 2,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <AntDesign name={name} color={color} size={size} />
    </View>
  );
};

export default Icon;
