import React from 'react';
import { Touchable } from '../../../../components';
import { Text } from 'react-native';
import { observer } from 'mobx-react';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../../../../navigation/screens';
import s from './styles';

function ChatItem({ item }) {
  const nav = useNavigation();
  function onItemPress() {
    nav.navigate(screens.Chat, {
      chatId: item.id,
      product: item,
    });
    console.log(item.user);
  }
  return (
    <Touchable style={s.chatContainer} onPress={onItemPress}>
      <Text>Chat id: {item.id}</Text>
      <Text>User: {item.user?.fullName}</Text>
    </Touchable>
  );
}
export default observer(ChatItem);
