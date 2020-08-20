import {Platform} from 'react-native';

export default {
  default: {
    fontSize: 16,
    ...Platform.select({
      ios: {
        fontFamily: 'Avenir',
        fontSize: 20,
      },
      android: {
        fontFamily: 'Roboto',
        fontSize: 18,
      },
    }),
  },
};
