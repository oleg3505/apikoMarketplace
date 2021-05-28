import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useState } from 'react';
import s from './styles';
import { AuthBottom } from '../../components';
import { useNavigation } from '@react-navigation/native';

function RegisterScreen() {
  const nav = useNavigation();

  function onPressNavButton() {
    nav.navigate('Login');
  }

  const [email, setEmail] = useState('');
  function onChageEmail(val) {
    setEmail(val);
  }
  const [password, setPassword] = useState('');
  function onChangePassword(val) {
    setPassword(val);
  }
  const [repeatPassword, setRepeatPassword] = useState('');
  function onChangeRepeatPassword(val) {
    setRepeatPassword(val);
  }
  return (
    <View style={s.container}>
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
            secureTextEntry={true}
            onChangeText={onChangePassword}
          />
          <View style={s.infoPasswardBlock}>
            <Text style={s.infoLabel}>
              Password must contain 6-20 characters
            </Text>
          </View>
        </View>
        <View style={s.passwordBlock}>
          <Text style={s.label}>Repeat password</Text>
          <TextInput
            style={s.passwordInput}
            value={repeatPassword}
            secureTextEntry={true}
            onChangeText={onChangeRepeatPassword}
          />
          <View style={s.infoPasswardBlock}>
            <Text style={s.infoLabel}>Passwords must match</Text>
          </View>
        </View>
      </View>
      <AuthBottom
        onPressNavButton={onPressNavButton}
        account="Have an account?"
        navButton="LOGIN"
        submitButton="Register"
      />
    </View>
  );
}

export default RegisterScreen;
