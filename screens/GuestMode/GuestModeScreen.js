import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import s from './styles';
import { AuthBottom, Touchable } from '../../components';
import { useNavigation } from '@react-navigation/native';
import TabNavigation from '../../navigation/TabNavigation';
import { BrovseScreen } from '..';

function GuestModeScreen() {
  return <View style={s.mainContainer}></View>;
}

export default GuestModeScreen;
