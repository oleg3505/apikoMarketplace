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
import ChatItem from './components/ChatItem/ChatItem';

function InboxScreen() {
  const { viewer, chats } = useStore();

  useEffect(() => {
    chats.fetch.run();
    console.log(chats.items);
  }, []);

  if (!viewer.isLoggedIn) {
    return (
      <View style={s.mainContainer}>
        <NotLogined text="Login to send messages items" />
      </View>
    );
  }
  return (
    <FlatList
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      refreshing={chats.fetch.isLoading}
      onRefresh={() => chats.fetch.run()}
      data={chats.items}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item }) => <ChatItem item={item} />}
    />
  );
}

export default observer(InboxScreen);
