import React from 'react';
import s from './styles';
import { Text, View } from 'react-native';

function Label({ name }) {
  return (
    <View style={s.label}>
      <Text>{name}</Text>
    </View>
  );
}

export default Label;
