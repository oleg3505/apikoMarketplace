import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Linking,
  ScrollView,
} from 'react-native';
// import { useState } from 'react';
import s from './styles';
import { AuthBottom, Touchable } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { colors } from '../../styles';

import { screens } from '../../navigation/screens';
import { useCallback } from 'react';
import { useStore } from '../../stores/CreateStore';
import NotLogined from '../../components/NotLogined/NotLogined';
import { observer } from 'mobx-react';

function SettingsScreen() {
  const nav = useNavigation();
  function onPressPrivacy() {
    nav.navigate(screens.WebView);
  }
  const supportedURL = 'https://apiko.com';

  const onPressTerms = useCallback(async () => {
    const supported = await Linking.canOpenURL(supportedURL);

    if (supported) {
      await Linking.openURL(supportedURL);
    } else {
      Alert.alert(`Don't know how to open this URL: ${supportedURL}`);
    }
  }, [supportedURL]);
  const { viewer } = useStore();

  function onPressLogOut() {
    Alert.alert('Logout', 'Logout', [
      {
        text: 'ok',
        onPress: () => {
          viewer.logOut();
          nav.navigate(screens.Main);
        },
      },
      { text: 'Cansel', style: 'cancel' },
    ]);
  }

  if (!viewer.isLoggedIn) {
    return (
      <View style={s.mainContainer}>
        <View style={s.imgContainer}>
          <Image
            style={{ height: 120, width: 300 }}
            source={require('../../assets/splash.png')}
          />
        </View>
        <Touchable onPress={onPressPrivacy} style={s.container}>
          <Text style={s.containerText}>Privacy Policy</Text>
          <AntDesign name="right" size={24} color={colors.borderGrey} />
        </Touchable>

        <Touchable onPress={onPressTerms} style={s.container}>
          <Text style={s.containerText}>Terms & Conditions</Text>
          <AntDesign name="right" size={24} color={colors.borderGrey} />
        </Touchable>

        <NotLogined text="Login to view your profile" />
      </View>
    );
  }
  return (
    <View style={s.mainContainer}>
      <View style={s.imgContainer}>
        <Image
          style={{ height: 120, width: 300 }}
          source={require('../../assets/splash.png')}
        />
      </View>
      {/* <Touchable style={s.container}>
        <Text style={s.containerText}>Notifications</Text>
        <AntDesign name="right" size={24} color={colors.borderGrey} />
      </Touchable> */}

      <Touchable onPress={onPressPrivacy} style={s.container}>
        <Text style={s.containerText}>Privacy Policy</Text>
        <AntDesign name="right" size={24} color={colors.borderGrey} />
      </Touchable>

      <Touchable onPress={onPressTerms} style={s.container}>
        <Text style={s.containerText}>Terms & Conditions</Text>
        <AntDesign name="right" size={24} color={colors.borderGrey} />
      </Touchable>

      <Touchable onPress={onPressLogOut} style={s.logOutContainer}>
        <SimpleLineIcons name="logout" size={24} color={colors.primary} />
        <Text style={s.logOutText}>LOG OUT</Text>
      </Touchable>
    </View>
  );
}

export default observer(SettingsScreen);
