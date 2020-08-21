import {DefaultTheme} from '@react-navigation/native';
import colors from '../assets/colors/colors';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: colors.danger,
    background: colors.while,
  },
};
