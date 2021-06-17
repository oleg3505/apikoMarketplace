import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import s from './styles';
import Touchable from '../Touchable/Touchable';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { useState } from 'react';
import { screens } from '../../navigation/screens';

const SearchInput = ({
  onPressNavButton,
  account,
  navButton,
  submitButton,
  nameBack,
}) => {
  const nav = useNavigation();
  function openFilter() {
    nav.navigate(screens.Filter);
  }

  const [searchValue, setSearchValue] = useState('');
  function onChangeSearchValue(val) {
    setSearchValue(val);
  }

  return (
    <View style={s.mainContainer}>
      <View style={s.searchContainer}>
        <AntDesign
          name="search1"
          size={18}
          color="black"
          style={s.searchIcon}
        />
        <TextInput
          style={s.searchInput}
          value={searchValue}
          onChangeText={onChangeSearchValue}
          placeholder=" Search"
        />
      </View>
      <Touchable onPress={openFilter}>
        <FontAwesome
          name="filter"
          size={24}
          color="#349A89"
          style={s.filterIcon}
        />
      </Touchable>
    </View>
  );
};
export default SearchInput;
