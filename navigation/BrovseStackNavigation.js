import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  AddPostScreen,
  BrovseScreen,
  FilterScreen,
  LoginScreen,
  MainScreen,
  RegisterScreen,
} from '../screens';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import GuestModeScreen from '../screens/GuestMode/GuestModeScreen';
import s from './styles';
import { Ionicons } from '@expo/vector-icons';
import Touchable from '../components/Touchable/Touchable';
import { Text, View, TextInput } from 'react-native';
import { SearchInput } from '../components';

const Stack = createStackNavigator();

export function BrovseStackNavigation() {
  // const nav = useNavigation();
  // function closeAddPost(){
  //     nav.navigate(
  //         'AddPost'
  //     )}
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Brovse"
        component={BrovseScreen}
        options={{
          headerLeft: false,
          headerTitleAlign: 'center',
          headerTitle: () => <SearchInput nameBack="Brovse" />,
        }}
      />

      <Stack.Screen
        name="Filter"
        component={FilterScreen}
        options={{
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
