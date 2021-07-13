import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  AddPostScreen,
  BrowseScreen,
  FilterScreen,
  LoginScreen,
  MainScreen,
  RegisterScreen,
  ProductScreen,
} from '../screens';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import s from './styles';
import { Ionicons } from '@expo/vector-icons';
import Touchable from '../components/Touchable/Touchable';
import { Text, View, TextInput } from 'react-native';
import { SearchInput } from '../components';
import { screens } from './screens';

const Stack = createStackNavigator();

export function BrowseStackNavigation() {
  // const nav = useNavigation();
  // function closeAddPost(){
  //     nav.navigate(
  //         'AddPost'
  //     )}
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.Browse}
        component={BrowseScreen}
        options={{
          headerLeft: false,
          headerTitleAlign: 'center',
          headerTitle: () => <SearchInput nameBack="Browse" />,
        }}
      />

      <Stack.Screen
        name={screens.Filter}
        component={FilterScreen}
        options={{
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={screens.Product}
        component={ProductScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: false,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
