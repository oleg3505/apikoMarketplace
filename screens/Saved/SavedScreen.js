import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import { useState } from 'react';
import s from './styles';
import { AuthBottom, Touchable } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '../../stores/CreateStore';
import { observer } from 'mobx-react';
import NotLogined from '../../components/NotLogined/NotLogined';
import { AntDesign } from '@expo/vector-icons';

function SavedScreen() {
  const { viewer } = useStore();

  if (!viewer.isLoggedIn) {
    return (
      <View style={s.mainContainer}>
        <NotLogined text="Login to save items" />
      </View>
    );
  }
  return (
    <View style={s.mainContainer}>
      <AntDesign name="picture" size={62} color="black" />
      <Text>No saved items yet</Text>
    </View>
  );
}

export default observer(SavedScreen);
