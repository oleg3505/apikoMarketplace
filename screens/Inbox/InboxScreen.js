import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import { useState } from 'react';
import s from './styles';
import { AuthBottom, Touchable } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { useStore } from '../../stores/CreateStore';
import { observer } from 'mobx-react';
import NotLogined from '../../components/NotLogined/NotLogined';
import { useEffect } from 'react';

function InboxScreen() {
  const { viewer, chats } = useStore();

  useEffect(() => {
    chats.fetch.run();
  }, []);

  if (!viewer.isLoggedIn) {
    return (
      <View style={s.mainContainer}>
        <NotLogined text="Login to send messages items" />
      </View>
    );
  }
  return (
    <View style={s.mainContainer}>
      {/* <AntDesign name="message1" size={68} color="black" />
      <Text>No messages yet</Text> */}
      <FlatList
        refreshing={chats.fetch.isLoading}
        data={chats.items}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <Text>{item.id}</Text>}
      />
    </View>
  );
}

export default observer(InboxScreen);
