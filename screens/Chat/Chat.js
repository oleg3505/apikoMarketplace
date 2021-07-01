import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import s from './styles';
import { observer } from 'mobx-react';

function Chat() {
  return (
    <View>
      <Text>Chat</Text>
    </View>
  );
}

export default observer(Chat);
