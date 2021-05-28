import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import s from './styles';
import { AuthBottom, Touchable } from '../../components';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {
  const nav = useNavigation();

  function onPressNavButton() {
    nav.navigate('Register');
  }

  const [email, setEmail] = useState('');
  function onChageEmail(val) {
    setEmail(val);
  }
  const [password, setPassword] = useState('');
  function onChagePassword(val) {
    setPassword(val);
  }
  return (
    <View style={s.mainContainer}>
      <View style={s.inputsContainer}>
        <View style={s.emailBlock}>
          <Text style={s.label}>Email</Text>
          <TextInput
            style={s.emailInput}
            value={email}
            keyboardType="email-address"
            onChangeText={onChageEmail}
          />
        </View>
        <View style={s.passwordBlock}>
          <Text style={s.label}>Password</Text>
          <TextInput
            style={s.passwordInput}
            value={password}
            secureTextEntry
            onChangeText={onChagePassword}
          />
        </View>
        <View style={s.forgotPasswardBlock}>
          <Text style={s.label}>Forgot password?</Text>
        </View>
      </View>

      <AuthBottom
        onPressNavButton={onPressNavButton}
        account="Don`t have an account?"
        navButton="REGISTER"
        submitButton="Login"
      />
    </View>
  );
}

export default LoginScreen;
