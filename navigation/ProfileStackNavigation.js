import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  AddPostScreen,
  LoginScreen,
  MainScreen,
  ProfileScreen,
  RegisterScreen,
} from '../screens';
import { NavigationContainer } from '@react-navigation/native';

import { screens } from './screens';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import WebViewScreen from '../screens/WebViev/WebViewScreen';

const Stack = createStackNavigator();

export function ProfileStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.Profile}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.Settings}
        component={SettingsScreen}
        options={{ headerTitleAlign: 'center', headerTitle: 'Settings' }}
      />
      <Stack.Screen
        name={screens.WebView}
        component={WebViewScreen}
        options={{ headerTitleAlign: 'center', headerTitle: 'WebView' }}
      />
    </Stack.Navigator>
  );
}
