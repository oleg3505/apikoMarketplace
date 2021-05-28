import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import s from './styles';
import { AuthBottom, Touchable } from '../../components';
import { useNavigation } from '@react-navigation/native';

function SavedScreen() {
  return (
    <ScrollView>
      <Text>Saved Screen</Text>
    </ScrollView>
  );
}

export default SavedScreen;
