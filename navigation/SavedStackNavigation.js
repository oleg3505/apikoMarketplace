import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  AddPostScreen,
  LoginScreen,
  MainScreen,
  RegisterScreen,
  SavedScreen,
} from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import GuestModeScreen from '../screens/GuestMode/GuestModeScreen';
import { SearchInput } from '../components';

const Stack = createStackNavigator();

export function SavedStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          headerLeft: false,
          headerTitleAlign: 'center',
          headerTitle: () => <SearchInput nameBack="Saved" />,
        }}
      />
    </Stack.Navigator>
  );
}
