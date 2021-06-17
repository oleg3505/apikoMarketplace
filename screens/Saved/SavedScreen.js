import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import { useState } from 'react';
import s from './styles';
import { AuthBottom, Touchable } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '../../stores/CreateStore';
import { observer } from 'mobx-react';

function SavedScreen() {
  const { viewer } = useStore();

  if (!viewer.isLoggedIn) {
    return (
      <ScrollView>
        <Text>Saved Screen Guest mode</Text>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: 'https://res.cloudinary.com/apiko-spring-coures-2019/image/upload/v1609078979/yawzvhlv2mrnheypbs75.jpg',
          }}
        />
      </ScrollView>
    );
  }
  return (
    <ScrollView>
      <Text>Saved Screen</Text>
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: 'https://res.cloudinary.com/apiko-spring-coures-2019/image/upload/v1609078979/yawzvhlv2mrnheypbs75.jpg',
        }}
      />
    </ScrollView>
  );
}

export default observer(SavedScreen);
