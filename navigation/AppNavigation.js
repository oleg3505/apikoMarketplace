import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, MainScreen, RegisterScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigation from './TabNavigation';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { screens } from './screens';

const Stack = createStackNavigator();

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screens.Main}
          component={MainScreen}
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name={screens.Login}
          component={LoginScreen}
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name={screens.Register}
          component={RegisterScreen}
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name={screens.GuestMode}
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
