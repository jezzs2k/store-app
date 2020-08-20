import React, {useState} from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {AppTextInput, AppPicker} from '../components/AppText';
import AppButton from '../components/Button/AppButton';
import ErrorMessage from '../components/Error';
import {CategoryPickerItem} from '../components/AppText';
import colors from '../assets/colors/colors';

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

const ListingEditScreen = () => {
  const [selectedItem, setSelectedItem] = useState(categories[0]);
  const _validationSchema = Yup.object().shape({
    title: Yup.string().required().nullable().label('Title'),
    price: Yup.string()
      .required()
      .nullable()
      .max(10000000000000)
      .label('Price'),
    category: Yup.string().required().nullable().label('Category'),
    description: Yup.string().required().nullable().label('Description'),
  });
  return (
    <Formik
      initialValues={{
        title: '',
        price: '',
        description: '',
        category: selectedItem.label,
      }}
      onSubmit={(values) => console.log(values)}
      validationSchema={_validationSchema}>
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        setFieldValue,
        touched,
      }) => (
        <View style={{paddingHorizontal: 8}}>
          <ErrorMessage error={errors.title} visible={touched.title} />
          <AppTextInput
            _placeholder="Title"
            _onChangeText={handleChange('title')}
            _onBlur={handleBlur('title')}
            _autoCorrect={false}
            _autoCapitalize="none"
            _keyboardType="default"
          />
          <ErrorMessage error={errors.price} visible={touched.price} />
          <AppTextInput
            _placeholder="Price"
            _onChangeText={handleChange('price')}
            _onBlur={handleBlur('price')}
            _autoCorrect={false}
            _autoCapitalize="none"
            _keyboardType="default"
            _width={150}
          />
          <ErrorMessage error={errors.category} visible={touched.category} />
          <AppPicker
            _placeholder="category"
            items={categories}
            selectedItem={selectedItem}
            onSelectItem={setSelectedItem}
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
            _onChangeText={handleChange('description')}
            _onBlur={handleBlur('description')}
            _autoCorrect={false}
            _autoCapitalize="none"
            _keyboardType="default"
          />
          <AppButton _onPress={handleSubmit} title="Post" color="danger" />
        </View>
      )}
    </Formik>
  );
};

export default ListingEditScreen;
