import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import { Touchable } from '..';
import { screens } from '../../navigation/screens';
import s from './styles';

function NotLogined({ text }) {
  const nav = useNavigation();
  function onPressLogin() {
    nav.navigate(screens.Login);
  }

  return (
    <View style={s.mainContainer}>
      <View>
        <Text style={s.textContainer}>{text}</Text>
      </View>
      <View style={s.loginContainer}>
        <Touchable onPress={onPressLogin} style={s.loginButton}>
          <Text style={s.loginText}>LOGIN</Text>
        </Touchable>
      </View>
    </View>
  );
}

export default NotLogined;
