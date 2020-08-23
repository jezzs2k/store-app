import React, {useState, useRef} from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {AppTextInput, AppPicker} from '../components/AppText';
import AppButton from '../components/Button/AppButton';
import ErrorMessage from '../components/Error';
import {CategoryPickerItem} from '../components/AppText';
import colors from '../assets/colors/colors';
import ImageMultipleInput from '../components/Image/ImageMultipleInput';
import {ScrollView} from 'react-native-gesture-handler';
import {Location} from '../hooks/useLocation';
import UploadVisible from './UploadModal';

import {ListingsFactory} from '../api/listings';

const categories = [
  {
    id: 1,
    label: 'Furniture',
    name: 'hdd',
    backGroundColor: colors.danger,
  },
  {
    id: 2,
    label: 'Clothing',
    name: 'skin',
    backGroundColor: colors.redLight,
  },
  {
    id: 3,
    label: 'Cameras',
    name: 'camerao',
    backGroundColor: colors.secondary,
  },
  {
    id: 4,
    label: 'Cars',
    name: 'car',
    backGroundColor: colors.danger,
  },
  {
    id: 5,
    label: 'Games',
    name: 'iconfontdesktop',
    backGroundColor: colors.redLight,
  },
  {
    id: 6,
    label: 'Sports',
    name: 'man',
    backGroundColor: colors.secondary,
  },
  {
    id: 7,
    label: 'Movie & Music',
    name: 'videocamera',
    backGroundColor: colors.danger,
  },
  {
    id: 8,
    label: 'Books',
    name: 'book',
    backGroundColor: colors.redLight,
  },
  {
    id: 9,
    label: 'Others',
    name: 'calendar',
    backGroundColor: colors.medium,
  },
];

const _validationSchema = Yup.object().shape({
  title: Yup.string().required().nullable().label('Title'),
  price: Yup.string().required().nullable().max(10000000000000).label('Price'),
  category: Yup.string().required().nullable().label('Category'),
  description: Yup.string().nullable().label('Description'),
  imageUrls: Yup.string().min(1, 'Please select at least one image!'),
});

const ListingEditScreen = () => {
  const listingsFactory = new ListingsFactory();

  const location = Location();

  const observer: any = useRef();
  const [selectCategory, setSelectedCategory] = useState(categories[0]);
  const [uploadVisible, setUploadVisible] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleAddImage = (
    url: string,
    imageUrls: string[],
    setFieldValue: Function,
  ) => {
    if (imageUrls.findIndex((item) => url === item) === -1) {
      return setFieldValue('imageUrls', [...imageUrls, url]);
    }

    return null;
  };
  const removeImage = (
    url: string,
    imageUrls: string[],
    setFieldValue: Function,
  ) => {
    return setFieldValue(
      'imageUrls',
      imageUrls.filter((item: string) => item !== url),
    );
  };

  const handlePostData = (values: any) => {
    setUploadVisible(true);
    listingsFactory
      .postList({...values, location}, (progress: any) => {
        setUploadProgress(progress.loaded / progress.total);
      })
      .then((res) => {
        setSelectedCategory(categories[0]);
      })
      .catch((error) => {
        setUploadVisible(false);
        console.log(error);
      });
  };

  return (
    <ScrollView
      ref={observer}
      onContentSizeChange={() =>
        observer.current?.scrollTo({x: 100, y: 200, animated: true})
      }>
      <Formik
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: selectCategory,
          imageUrls: [],
        }}
        onSubmit={handlePostData}
        validationSchema={_validationSchema}>
        {({
          handleSubmit,
          handleBlur,
          setFieldValue,
          errors,
          touched,
          values,
        }) => (
          <View style={{paddingHorizontal: 8}}>
            <UploadVisible
              progress={uploadProgress}
              visible={uploadVisible}
              onDone={() => setUploadVisible(false)}
            />
            <ErrorMessage
              error={errors.imageUrls}
              visible={touched.imageUrls}
            />
            <ImageMultipleInput
              imageUrls={values.imageUrls}
              onSelectImage={(url: string) =>
                handleAddImage(url, values.imageUrls, setFieldValue)
              }
              onRemoveImage={(url: string) =>
                removeImage(url, values.imageUrls, setFieldValue)
              }
            />
            <ErrorMessage error={errors.title} visible={touched.title} />
            <AppTextInput
              _placeholder="Title"
              _onChangeText={setFieldValue}
              name="title"
              values={values}
              _onBlur={handleBlur('title')}
              _autoCorrect={false}
              _autoCapitalize="none"
              _keyboardType="default"
            />
            <ErrorMessage error={errors.price} visible={touched.price} />
            <AppTextInput
              _placeholder="Price"
              _onChangeText={setFieldValue}
              name="price"
              values={values}
              _onBlur={handleBlur('price')}
              _autoCorrect={false}
              _autoCapitalize="none"
              _keyboardType="default"
              _width={150}
              _onScrollTop={observer.current?.scrollTo({
                x: 100,
                y: 200,
                animated: true,
              })}
            />
            <ErrorMessage error={errors.category} visible={touched.category} />
            <AppPicker
              _placeholder="category"
              items={categories}
              selectedCategory={selectCategory}
              onSelectCategory={setSelectedCategory}
              _setFieldValue={setFieldValue}
              CategoryPickerItem={CategoryPickerItem}
              _width="50%"
            />
            <ErrorMessage
              error={errors.description}
              visible={touched.description}
            />
            <AppTextInput
              _placeholder="Description"
              _onChangeText={setFieldValue}
              name="description"
              values={values}
              _onBlur={handleBlur('description')}
              _autoCorrect={false}
              _autoCapitalize="none"
              _keyboardType="default"
            />
            <AppButton _onPress={handleSubmit} title="Post" color="danger" />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default ListingEditScreen;
