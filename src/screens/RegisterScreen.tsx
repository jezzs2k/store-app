import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {StackNavigationProp} from '@react-navigation/stack';

import AppButton from '../components/Button/AppButton';
import colors from '../assets/colors/colors';
import {AppTextInput} from '../components/AppText';
import ErrorMessage from '../components/Error';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  WelCome: undefined;
};
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'WelCome'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const RegisterScreen = ({navigation}: Props) => {
  const _validationSchema = Yup.object().shape({
    username: Yup.string().required().min(1, 'Name at least one character!'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(6).label('Password'),
  });
  return (
    <View style={styles.container}>
      <View style={styles.wrapLogo}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://image.flaticon.com/icons/png/512/124/124023.png',
          }}
        />
      </View>
      <Formik
        initialValues={{username: '', email: '', password: ''}}
        onSubmit={(values) => console.log(values)}
        validationSchema={_validationSchema}>
        {({handleChange, handleSubmit, errors, handleBlur, touched}) => (
          <>
            <ErrorMessage error={errors.username} visible={touched.username} />
            <AppTextInput
              icon="user"
              _placeholder="Username..."
              _onBlur={handleBlur('username')}
              _autoCapitalize="none"
              _keyboardType="default"
              _autoCorrect={false}
              _onChangeText={handleChange('username')}
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              icon="user"
              _placeholder="Email..."
              _onBlur={handleBlur('email')}
              _autoCapitalize="none"
              _keyboardType="email-address"
              _autoCorrect={false}
              _onChangeText={handleChange('email')}
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
            <AppTextInput
              icon="lock"
              _placeholder="Password..."
              _onBlur={handleBlur('password')}
              _autoCapitalize="none"
              _keyboardType="default"
              _autoCorrect={false}
              _secureTextEntry={true}
              _multiline={true}
              _onChangeText={handleChange('password')}
            />

            <AppButton
              title="Sign Up"
              _onPress={handleSubmit}
              color={`secondary`}
            />
            <AppButton
              title="Login"
              _onPress={() => navigation?.navigate('Login')}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: '20%',
    paddingHorizontal: 20,
  },
  wrapLogo: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  text: {
    marginVertical: 8,
    color: colors.primary,
    fontSize: 14,
  },
});
export default RegisterScreen;
