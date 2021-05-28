import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import s from './styles';
import { AuthBottom, Touchable } from '../../components';
import { useNavigation } from '@react-navigation/native';

function FilterScreen() {
  return (
    <View styles={s.mainContainer}>
      <Text>Filter Screen</Text>
    </View>
  );
}

export default FilterScreen;
