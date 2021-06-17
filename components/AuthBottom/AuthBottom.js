import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import s from './styles';
import Touchable from '../Touchable/Touchable';

const AuthBottom = ({
  onPressNavButton,
  account,
  navButton,
  submitButton,
  onPressSubmit,
}) => {
  return (
    <View style={s.bottomBlock}>
      <Text>{account}</Text>
      <View style={s.registerContainer}>
        <Touchable onPress={onPressNavButton} style={s.registerutton}>
          <Text style={s.registerText}>{navButton}</Text>
        </Touchable>
      </View>
      <View style={s.loginContainer}>
        <Touchable onPress={onPressSubmit} style={s.loginButton}>
          <Text style={s.loginText}>{submitButton}</Text>
        </Touchable>
      </View>
    </View>
  );
};
export default AuthBottom;
