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
import GuestModeScreen from '../screens/GuestMode/GuestModeScreen';

const Stack = createStackNavigator();

export function ProfileStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
