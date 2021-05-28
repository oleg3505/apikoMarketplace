import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import s from './styles';
import { AuthBottom, Touchable } from '../../components';
import { useNavigation } from '@react-navigation/native';

function MainScreen() {
  const nav = useNavigation();

  function onPressRegister() {
    nav.navigate('Register');
  }
  function onPressLogin() {
    nav.navigate('Login');
  }
  function onGuestMode() {
    nav.navigate('GuestMode');
  }

  return (
    <View style={s.mainContainer}>
      <Touchable onPress={onPressRegister}>
        <Text style={s.buttonContainer}>
          <Text style={s.text}>REGISTER</Text>
        </Text>
      </Touchable>
      <Touchable onPress={onPressLogin}>
        <Text style={s.buttonContainer}>
          <Text style={s.text}>LOGIN</Text>
        </Text>
      </Touchable>
      <Touchable onPress={onGuestMode}>
        <Text style={s.buttonContainer}>
          <Text style={s.text}>Guest Mode</Text>
        </Text>
      </Touchable>
    </View>
  );
}

export default MainScreen;
