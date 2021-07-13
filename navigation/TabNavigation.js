import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import s from './styles';
import { SavedStackNavigation } from './SavedStackNavigation';
import { BrowseStackNavigation } from './BrowseStackNavigation';
import { InboxStackNavigation } from './InboxStackNavigation';
import { ProfileStackNavigation } from './ProfileStackNavigation';
import { colors } from '../styles';
import { screens } from './screens';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen
        name={screens.Browse}
        options={{
          tabBarLabel: (props) => (
            <Text style={[props.focused ? s.active : s.inactive]}> Browse</Text>
          ),
          tabBarIcon: (props) => (
            <AntDesign
              name="search1"
              size={24}
              color={props.focused ? colors.primary : colors.grey}
            />
          ),
        }}
        component={BrowseStackNavigation}
      />
      <Tab.Screen
        name={screens.Saved}
        options={{
          tabBarLabel: (props) => (
            <Text style={[props.focused ? s.active : s.inactive]}> Saved</Text>
          ),
          tabBarIcon: (props) => (
            <Ionicons
              name="ios-bookmark-sharp"
              size={24}
              color={props.focused ? colors.primary : colors.grey}
            />
          ),
        }}
        component={SavedStackNavigation}
      />
      <Tab.Screen
        name={screens.AddPost}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            console.log(e);
            navigation.navigate(screens.AddPostModal);
          },
        })}
        options={{
          // tabBarVisible: false,
          tabBarLabel: (props) => (
            <Text style={[props.focused ? s.active : s.inactive]}> </Text>
          ),
          tabBarIcon: (props) => (
            <AntDesign
              style={s.addIcon}
              name="pluscircle"
              size={48}
              color={colors.primary}
            />
          ),
        }}
        component={View}
      />
      <Tab.Screen
        name={screens.Inbox}
        options={{
          tabBarLabel: (props) => (
            <Text style={[props.focused ? s.active : s.inactive]}> Inbox </Text>
          ),
          tabBarIcon: (props) => (
            <MaterialIcons
              name="inbox"
              size={24}
              color={props.focused ? colors.primary : colors.grey}
            />
          ),
        }}
        component={InboxStackNavigation}
      />
      <Tab.Screen
        name={screens.Profile}
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
              color={props.focused ? colors.primary : colors.grey}
            />
          ),
        }}
        component={ProfileStackNavigation}
      />
    </Tab.Navigator>
  );
}
