import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';

function Message({ item, viewerId }) {
  const isOwner = viewerId === item.ownerId;
  return (
    <View style={isOwner && s.owner}>
      <Text>{item.text}</Text>
    </View>
  );
}
export default Message;
