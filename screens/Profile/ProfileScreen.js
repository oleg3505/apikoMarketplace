import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { useState } from 'react';
import s from './styles';
import { AuthBottom, Touchable } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { colors } from '../../styles';
import { Entypo } from '@expo/vector-icons';
import { screens } from '../../navigation/screens';
import { useStore } from '../../stores/CreateStore';
import { observer } from 'mobx-react';

function ProfileScreen() {
  const nav = useNavigation();
  function onPressSettings() {
    nav.navigate(screens.Settings);
  }
  const { viewer } = useStore();
  if (!viewer.isLoggedIn) {
    nav.navigate(screens.Settings);
  }

  return (
    <View style={s.mainContainer}>
      <Touchable onPress={onPressSettings}>
        <View>
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </View>
      </Touchable>
    </View>
  );
}

export default observer(ProfileScreen);
