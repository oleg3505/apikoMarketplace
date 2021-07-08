import React from 'react';
import { Touchable } from '../../../../components';
import { Text } from 'react-native';
import { observer } from 'mobx-react';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../../../../navigation/screens';

function ChatItem({ item }) {
  const nav = useNavigation();
  function onItemPress() {
    nav.navigate(screens.Chat, {
      chatId: item.id,
      product: item,
    });
  }
  return (
    <Touchable onPress={onItemPress}>
      <Text>{item.id}</Text>
    </Touchable>
  );
}
export default observer(ChatItem);
