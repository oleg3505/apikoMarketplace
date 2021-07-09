import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Button,
} from 'react-native';
import { useState } from 'react';
import s from './styles';
import { AuthBottom } from '../../components';
import { useNavigation } from '@react-navigation/native';
import Api from '../../api';
import * as SecureStore from 'expo-secure-store';
import { screens } from '../../navigation/screens';
import { useStore } from '../../stores/CreateStore';
import { Formik } from 'formik';
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  repeatPassword: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

function RegisterScreen() {
  const nav = useNavigation();

  function onPressNavButton() {
    nav.navigate(screens.Login);
  }

  // const [email, setEmail] = useState('');
  // function onChageEmail(val) {
  //   setEmail(val);
  // }
  // const [fullName, setFullName] = useState('');
  // function onChageFullName(val) {
  //   setFullName(val);
  // }
  // const [password, setPassword] = useState('');
  // function onChangePassword(val) {
  //   setPassword(val);
  // }
  // const [repeatPassword, setRepeatPassword] = useState('');
  // function onChangeRepeatPassword(val) {
  //   setRepeatPassword(val);
  // }

  const store = useStore();

  async function onPressRegister(email, password, fullName, repeatPassword) {
    if (password === repeatPassword) {
      try {
        await store.auth.register.run({ email, password, fullName });
        if (await SecureStore.getItemAsync('__token')) {
          nav.navigate(screens.GuestMode);
        }
      } catch (err) {
        console.log('ERROR', err);
      }
    } else {
      alert('passwords are different');
    }
  }

  return (
    <ScrollView contentContainerStyle={s.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          fullName: '',
          repeatPassword: '',
        }}
        onSubmit={(values) =>
          onPressRegister(
            values.email,
            values.password,
            values.fullName,
            values.repeatPassword,
          )
        }
        validationSchema={RegisterSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={s.containerInFormik}>
            <View style={s.inputs}>
              <Text style={s.label}>Email</Text>
              <TextInput
                style={s.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {errors.email && values.email ? (
                <Text style={s.err}>{errors.email}</Text>
              ) : null}
              <Text style={s.label}>FullName</Text>
              <TextInput
                style={s.input}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
              />
              {errors.fullName && values.fullName ? (
                <Text style={s.err}>{errors.fullName}</Text>
              ) : null}
              <Text style={s.label}>Password</Text>
              <TextInput
                style={s.input}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={true}
              />
              {errors.password && values.password ? (
                <Text style={s.err}>{errors.password}</Text>
              ) : null}
              <Text style={s.label}>Repeat password</Text>
              <TextInput
                style={s.input}
                onChangeText={handleChange('repeatPassword')}
                onBlur={handleBlur('repeatPassword')}
                value={values.repeatPassword}
                secureTextEntry={true}
              />
              {errors.repeatPassword && values.repeatPassword ? (
                <Text style={s.err}>{errors.repeatPassword}</Text>
              ) : null}
            </View>

            <AuthBottom
              onPressNavButton={onPressNavButton}
              account="Have an account?"
              navButton="LOGIN"
              submitButton="Register"
              onPressSubmit={handleSubmit}
            />
          </View>
        )}
      </Formik>

      {/* <View style={s.inputsContainer}>
        <View style={s.emailBlock}>
          <Text style={s.label}>Email</Text>
          <TextInput
            style={s.emailInput}
            value={email}
            keyboardType="email-address"
            onChangeText={onChageEmail}
          />
        </View>
        <View style={s.fullNameBlock}>
          <Text style={s.label}>Full Name</Text>
          <TextInput
            style={s.fullNameInput}
            value={fullName}
            onChangeText={onChageFullName}
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
        onPressSubmit={onPressRegister}
      /> */}
    </ScrollView>
  );
}

export default RegisterScreen;
