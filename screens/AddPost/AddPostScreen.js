import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import s from './styles';
import { AuthBottom, Touchable } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { AddPosrStackNavigation } from '../../navigation/AddPostStackNavigation';
import { Ionicons } from '@expo/vector-icons';

function AddPostScreen() {
  return (
    <View style={s.mainContainer}>
      <View style={s.keyInfoContainer}>
        <Text>KEY INFORMATION</Text>
        <View style={s.titleInput}>
          <TextInput placeholder="Title" />
        </View>
        <View style={s.descriptionInput}>
          <TextInput placeholder="Description" />
        </View>
      </View>
    </View>
  );
}

export default AddPostScreen;
