import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  BrovseScreen,
  SavedScreen,
  InboxScreen,
  ProfileScreen,
  AddPostScreen,
} from '../screens';
import { AddPostStackNavigation } from './AddPostStackNavigation';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import s from './styles';
import { SavedStackNavigation } from './SavedStackNavigation';
import { BrovseStackNavigation } from './BrovseStackNavigation';
import { InboxStackNavigation } from './InboxStackNavigation';
import { ProfileStackNavigation } from './ProfileStackNavigation';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Brovse"
        options={{
          tabBarLabel: (props) => (
            <Text style={[props.focused ? s.active : s.inactive]}> Brovse</Text>
          ),
          tabBarIcon: (props) => (
            <AntDesign
              name="search1"
              size={24}
              color={props.focused ? '#349A89' : '#A0A4B1'}
            />
          ),
        }}
        component={BrovseStackNavigation}
      />
      <Tab.Screen
        name="Saved"
        options={{
          tabBarLabel: (props) => (
            <Text style={[props.focused ? s.active : s.inactive]}> Saved</Text>
          ),
          tabBarIcon: (props) => (
            <Ionicons
              name="ios-bookmark-sharp"
              size={24}
              color={props.focused ? '#349A89' : '#A0A4B1'}
            />
          ),
        }}
        component={SavedStackNavigation}
      />
      <Tab.Screen
        name="AddPost"
        options={{
          headerLeft: <Ionicons name="person" size={24} color="black" />,
          tabBarLabel: (props) => (
            <Text style={[props.focused ? s.active : s.inactive]}> </Text>
          ),
          tabBarIcon: (props) => (
            <AntDesign
              style={s.addIcon}
              name="pluscircle"
              size={48}
              color="#349A89"
            />
          ),
        }}
        component={AddPostStackNavigation}
      />
      <Tab.Screen
        name="Inbox"
        options={{
          tabBarLabel: (props) => (
            <Text style={[props.focused ? s.active : s.inactive]}> Inbox </Text>
          ),
          tabBarIcon: (props) => (
            <MaterialIcons
              name="inbox"
              size={24}
              color={props.focused ? '#349A89' : '#A0A4B1'}
            />
          ),
        }}
        component={InboxStackNavigation}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: (props) => (
            <Text style={[props.focused ? s.active : s.inactive]}>
              {' '}
              Profile
            </Text>
          ),
          tabBarIcon: (props) => (
            <Ionicons
              name="person"
              size={24}
              color={props.focused ? '#349A89' : '#A0A4B1'}
            />
          ),
        }}
        component={ProfileStackNavigation}
      />
    </Tab.Navigator>
  );
}
