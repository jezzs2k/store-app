import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import Icon from '../icon/Icon';
import colors from '../../assets/colors/colors';

interface Props {
  _imageUrl: string | null | undefined;
  onChangeImage: any;
}

const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const ImageInput = ({_imageUrl, onChangeImage}: Props) => {
  const launchStoreImage = () => {
    ImagePicker.launchImageLibrary(options, (res) => {
      if (res.uri) {
        onChangeImage(res.uri);
      }
      if (res.error) {
        Alert.alert(res.error);
      }
    });
  };

  const handleClick = () => {
    if (_imageUrl) {
      Alert.alert('Delete', 'Do you want remove this image ?', [
        {text: 'No'},
        {text: 'Yes', onPress: () => onChangeImage(null)},
      ]);
    } else {
      launchStoreImage();
    }
  };
  return (
    <TouchableOpacity onPress={handleClick} style={styles.container}>
      {!_imageUrl && (
        <Icon
          name="camera"
          backGroundColor={colors.lightMinium}
          color={colors.dark}
          size={50}
          borderRadius={15}
        />
      )}
      {_imageUrl && (
        <Image
          style={styles.image}
          resizeMode="stretch"
          source={{uri: _imageUrl}}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginVertical: 10,
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 15,
  },
});

export default ImageInput;
