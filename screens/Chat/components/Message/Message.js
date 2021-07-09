import { observer } from 'mobx-react';
import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';

function Message({ item, viewerId }) {
  const isOwner = viewerId === item.ownerId;
  return (
    <View style={isOwner ? s.owner : s.notOwner}>
      <View style={isOwner ? s.ownerCont : s.notOwnerCont}>
        <Text style={s.text}>{item.text}</Text>
        <Text style={s.text}>{item.createdAt.slice(11, 16)}</Text>
      </View>
    </View>
  );
}
export default observer(Message);
