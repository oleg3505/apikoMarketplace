import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  AddPostScreen,
  InboxScreen,
  LoginScreen,
  MainScreen,
  RegisterScreen,
} from '../screens';
import { NavigationContainer } from '@react-navigation/native';

import { screens } from './screens';

const Stack = createStackNavigator();

export function InboxStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.Inbox}
        component={InboxScreen}
        options={{
          headerTitleAlign: 'center',
          headerLeft: false,
        }}
      />
    </Stack.Navigator>
  );
}
