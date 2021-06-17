import React from 'react';
import { useEffect } from 'react';
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
import Api from '../../api';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/CreateStore';
import * as SecureStore from 'expo-secure-store';
import { screens } from '../../navigation/screens';

function LoginScreen() {
  const nav = useNavigation();

  function onPressNavButton() {
    nav.navigate(screens.Register);
  }

  const [email, setEmail] = useState('');
  function onChageEmail(val) {
    setEmail(val);
  }
  const [password, setPassword] = useState('');
  function onChagePassword(val) {
    setPassword(val);
  }

  const store = useStore();

  async function onPressLogin() {
    try {
      await store.auth.login.run({ email, password });

      if (await SecureStore.getItemAsync('__token')) {
        nav.navigate(screens.GuestMode);
      }
    } catch (err) {
      console.log('ERROR', err);
    }
  }

  return (
    <ScrollView contentContainerStyle={s.mainContainer} style={{ flex: 1 }}>
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
        onPressSubmit={onPressLogin}
      />
    </ScrollView>
  );
}

export default observer(LoginScreen);
