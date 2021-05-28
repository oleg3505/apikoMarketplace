import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import { useState } from 'react';
import s from './styles';
import { AuthBottom, Touchable } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

function InboxScreen() {
  return (
    <View style={s.mainContainer}>
      <AntDesign name="message1" size={68} color="black" />
      <Text>No messages yet</Text>
    </View>
  );
}

export default InboxScreen;
