import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../../assets/colors/colors';
import StyleDefault from '../../assets/styles/styleTextDefault';

interface Props {
  icon?: string;
  _placeholder: string;
  _autoCapitalize?: any;
  _keyboardType?: any;
  _autoCorrect?: boolean;
  _secureTextEntry?: boolean;
  _multiline?: boolean;
  _onChangeText: any;
  _onScrollTop?: () => void;
  _onBlur: any;
  _width?: number | string;
}

const AppTextInput = ({
  icon,
  _placeholder,
  _autoCapitalize,
  _autoCorrect,
  _keyboardType,
  _secureTextEntry,
  _multiline,
  _onChangeText,
  _onBlur,
  _width = '100%',
  _onScrollTop,
}: Props) => {
  return (
    <View style={[styles.container, {width: _width}]}>
      <View style={styles.icon}>
        {icon && <AntDesign color={colors.dark} name={icon} size={25} />}
      </View>
      <TextInput
        style={[StyleDefault.default, styles.input]}
        placeholder={_placeholder}
        autoCapitalize={_autoCapitalize}
        keyboardType={_keyboardType}
        autoCorrect={_autoCorrect || false}
        secureTextEntry={_secureTextEntry || false}
        multiline={_multiline && false}
        onChangeText={_onChangeText}
        onBlur={_onBlur}
        onFocus={_onScrollTop}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    marginVertical: 10,
    shadowColor: colors.dark,
    shadowOffset: {width: 2, height: 3},
    shadowRadius: 2,
    elevation: 2,
  },
  icon: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    paddingLeft: 10,
    color: colors.dark,
  },
});

export default AppTextInput;
