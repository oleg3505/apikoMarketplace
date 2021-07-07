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
  const { chatId } = route.params;
  const { chats, viewer } = useStore();
  const chat = chats.getById(+chatId);
  console.log(chat.messages.items);
  const viewerId = viewer.userModel.id;
  useEffect(() => {
    chats.getById(+chatId).messages.fetch.run();
  }, []);

  const [message, setMessage] = useState();

  function onSendMessage() {
    chat.sendMessage.run(message);
    setMessage('');
  }

  return (
    <View style={{ flex: 1 }}>
      {/* <Text>{chatId}</Text> */}
      <FlatList
        style={{ flex: 1, padding: 10 }}
        contentContainerStyle={{ flexGrow: 1 }}
        inverted={true}
        data={chat.messages.items}
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
