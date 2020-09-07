import React from 'react';
import {View} from 'react-native';

import AppButton from '../Button/AppButton';
import colors from '../../assets/colors/colors';

interface Props {
  hasNew: boolean;
  _onPress: () => void;
}

const CheckNewList = ({hasNew, _onPress}: Props) => {
  return hasNew ? (
    <View
      style={{
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
        width: '100%',
      }}>
      <AppButton
        title="Has new listing"
        _onPress={_onPress}
        color={colors.secondary}
        width={'60%'}
      />
    </View>
  ) : null;
};

export default CheckNewList;
