import React from 'react';
import { Text, View, FlatList, TextInput } from 'react-native';
import { useState } from 'react';
import s from './styles';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/CreateStore';
import { useEffect } from 'react';
import Message from './components/Message/Message';
import { Touchable } from '../../components';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles';

function Chat({ route }) {
  const { chatId, product } = route.params;
  const { chats, viewer } = useStore();
  const chat = chats.getById(chatId ? chatId : +product.chatId);

  const viewerId = viewer.userModel.id;
  useEffect(() => {
    if (chat) {
      chats.getById(+chatId).messages.fetch.run();
    } else {
      chats.fetch.run();
      // async function fetchChats() {
      //   await chats.fetch.run();
      // }
    }
  }, []);

  const [message, setMessage] = useState();
  function onSendMessage() {
    async function onChat() {
      const chatID = await product.createChat.run(message);

      setMessage('');
      await chats.fetch.run();
      chats.getById(+chatID).messages.fetch.run();
    }
    if (chatId) {
      chat.sendMessage.run(message);
      setMessage('');
      return;
    }
    if (product) {
      onChat();
    }
  }

  return (
    <View style={{ flex: 1 }}>
      {/* <Text>{chatId}</Text> */}
      <FlatList
        style={{ flex: 1, padding: 10 }}
        contentContainerStyle={{ flexGrow: 1 }}
        inverted={true}
        data={chat ? chat.messages.items : []}
        renderItem={({ item }) => <Message item={item} viewerId={viewerId} />}
      />
      <View style={s.sendMessageContainer}>
        <TextInput
          style={s.messageInput}
          value={message}
          onChangeText={setMessage}
        />
        <Touchable onPress={onSendMessage}>
          <Ionicons name="ios-send-sharp" size={24} color={colors.primary} />
        </Touchable>
      </View>
    </View>
  );
}

export default observer(Chat);
