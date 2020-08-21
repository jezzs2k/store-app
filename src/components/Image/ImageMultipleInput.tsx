import React, {useRef} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import InputImage from './ImageInput';

interface Props {
  imageUrls: any;
  onSelectImage: any;
  onRemoveImage: any;
}

const ImageMultipleInput = ({
  imageUrls,
  onSelectImage,
  onRemoveImage,
}: Props) => {
  const scrollView: any = useRef();

  return (
    <ScrollView
      ref={scrollView}
      horizontal={true}
      bounces={true}
      removeClippedSubviews={false}
      onContentSizeChange={() => scrollView.current?.scrollToEnd()}>
      <View style={styles.container}>
        {imageUrls.map((url: string, index: number) => (
          <View key={`${index}`}>
            <InputImage
              _imageUrl={url}
              onChangeImage={() => onRemoveImage(url, imageUrls)}
            />
          </View>
        ))}
        <InputImage
          _imageUrl={null}
          onChangeImage={(url: string) => onSelectImage(url, imageUrls)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
});

export default ImageMultipleInput;
