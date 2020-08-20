import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../assets/colors/colors';

import StyleDefault from '../../assets/styles/styleTextDefault';
import {AppText, PickerItem} from './index';
import ListSeparator from '../Separators/ListSeparator';

interface Props {
  icon?: string;
  _placeholder: string;
  items: any;
  selectedItem: any;
  onSelectItem: Function;
  _setFieldValue?: any;
  CategoryPickerItem?: any;
  _width?: number | string;
}

const AppTextInput = ({
  icon,
  _placeholder,
  items,
  selectedItem,
  onSelectItem,
  _setFieldValue,
  CategoryPickerItem = PickerItem,
  _width = '100%',
}: Props) => {
  const [visibleModal, setVisibleModal] = useState(false);

  const onOpenModal = () => {
    setVisibleModal(true);
  };

  const onCloseModal = () => {
    setVisibleModal(false);
  };

  return (
    <>
      <TouchableOpacity activeOpacity={0.5} onPress={onOpenModal}>
        <View style={[styles.container, {width: _width}]}>
          <View style={styles.icon}>
            {icon && <AntDesign color={colors.dark} name={icon} size={25} />}
          </View>
          <View style={styles.text}>
            <AppText style={[StyleDefault.default]}>
              {selectedItem ? selectedItem.label : _placeholder}
            </AppText>
          </View>

          <View style={styles.iconDown}>
            <AntDesign color={colors.dark} name={'down'} size={23} />
          </View>
        </View>
      </TouchableOpacity>
      <Modal visible={visibleModal} animationType="slide">
        <Button
          title={'Close'}
          onPress={onCloseModal}
          color={colors.secondary}
        />
        <FlatList
          numColumns={3}
          data={items}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => (
            <CategoryPickerItem
              item={item}
              key={`${item.id}`}
              _onPress={() => {
                onCloseModal();
                _setFieldValue('category', item.label);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
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
    paddingVertical: 8,
  },
  text: {
    justifyContent: 'center',
    marginLeft: 20,
    flex: 1,
    paddingVertical: 10,
  },
  iconDown: {
    justifyContent: 'center',
    marginRight: 10,
  },
});

export default AppTextInput;
