import React from 'react';
import { View, Text, Image } from 'react-native';
import Api from '../../api';
import s from './styles';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles';
import { Touchable } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../../navigation/screens';
import { observer } from 'mobx-react';

function UserInfo({ ownerId }) {
  return (
    <View>
      <Text>{ownerId}</Text>
    </View>
  );
}

export default observer(UserInfo);
