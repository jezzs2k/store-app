import React from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';
import {useFormikContext} from 'formik';

import colors from '../assets/colors/colors';

const UploadProgress = ({progress = 0, visible = false, onDone}: any) => {
  const {resetForm} = useFormikContext();
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.secondary}
            progress={progress}
            width={300}
          />
        ) : (
          <LottieView
            onAnimationFinish={() => {
              resetForm();
              return onDone();
            }}
            source={require('../assets/animations/done.json')}
            autoPlay
            loop={false}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export default UploadProgress;
