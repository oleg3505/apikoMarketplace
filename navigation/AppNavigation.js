import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, MainScreen, RegisterScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import GuestModeScreen from '../screens/GuestMode/GuestModeScreen';
import TabNavigation from './TabNavigation';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="GuestMode"
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
