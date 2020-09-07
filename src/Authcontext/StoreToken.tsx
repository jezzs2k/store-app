import AsyncStorage from '@react-native-community/async-storage';

const PREFIX = 'token';

const setTokenStore = async (token: string) => {
  try {
    await AsyncStorage.setItem(PREFIX, token);
  } catch (error) {
    console.log('error', error);
  }
};

const getTokenStore = async () => {
  try {
    const token = await AsyncStorage.getItem(PREFIX);

    return token;
  } catch (error) {
    console.log(error);
  }
};

const removeTokenStore = async () => {
  try {
    await AsyncStorage.removeItem(PREFIX);
  } catch (error) {
    console.log(error);
  }
};

export {setTokenStore, getTokenStore, removeTokenStore};
