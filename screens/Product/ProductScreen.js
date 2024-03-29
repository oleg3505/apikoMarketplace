import React, { useEffect } from 'react';
import { Text, View, TextInput, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import s from './styles';
import { Touchable } from '../../components';

import { Entypo } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../styles';
import UserInfo from '../../components/UserInfo/UserInfo';
import { Linking } from 'react-native';
import { useStore } from '../../stores/CreateStore';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../../navigation/screens';
import { observer } from 'mobx-react';

function ProductScreen({ route }) {
  const { item } = route.params;
  const placeHolderImg =
    'data:image/png;base64,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';

  const { latestProducts, entities } = useStore();

  useEffect(() => {
    console.log(item.photos);
    console.log(item);
  }, []);
  function onPressCall() {
    Linking.openURL(`tel:${item.owner.phone}`);
    console.log(item);
  }

  const nav = useNavigation();
  function onPressSendMessage() {
    nav.navigate(screens.Chat, {
      chatId: item.chatId,
      product: item,
    });
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={s.mainContainer}>
        <View style={s.imgContainer}>
          <Image
            style={s.imgContainer}
            source={{
              uri:
                item.photos && item.photos[0] ? item.photos[0] : placeHolderImg,
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View style={s.titlePriceContainer}>
            <Text style={s.titleTextContainer}>{item.title}</Text>
            <Text style={s.priceTextContainer}>{item.price} $</Text>
          </View>
          <View style={s.locationContainer}>
            <Entypo name="location-pin" size={24} color="black" />
            <Text>
              {item.location} {item.id}
            </Text>
          </View>
          <View style={s.descriptionContainer}>
            <Text>{item.description}</Text>
          </View>
          <View style={s.ownerIdContainer}>
            <UserInfo item={item.owner} />
          </View>
          <View style={s.buttonsContainer}>
            <Touchable style={s.callButton} onPress={onPressCall}>
              <Ionicons name="ios-call" size={24} color={colors.white} />
              <Text style={{ color: colors.white }}>Call</Text>
            </Touchable>
            <Touchable style={s.sendMessageButton} onPress={onPressSendMessage}>
              <MaterialIcons name="message" size={24} color={colors.white} />
              <Text style={{ color: colors.white }}>Send message</Text>
            </Touchable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default observer(ProductScreen);
