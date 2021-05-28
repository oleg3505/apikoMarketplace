import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  AddPostScreen,
  LoginScreen,
  MainScreen,
  RegisterScreen,
} from '../screens';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import GuestModeScreen from '../screens/GuestMode/GuestModeScreen';
import { Ionicons } from '@expo/vector-icons';
import Touchable from '../components/Touchable/Touchable';

const Stack = createStackNavigator();
export function AddPostStackNavigation() {
  const nav = useNavigation();
  function closeAddPost() {
    nav.navigate('Brovse');
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          headerLeft: () => (
            <Touchable onPress={closeAddPost}>
              <Ionicons name="close" size={30} color="#349A89" />
            </Touchable>
          ),
          headerTitleAlign: 'center',
          headerTitle: 'New Post',
        }}
      />
    </Stack.Navigator>
  );
}
