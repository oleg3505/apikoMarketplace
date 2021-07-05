import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  FlatList,
} from 'react-native';
import { useState } from 'react';
import s from './styles';
import { AuthBottom, Touchable } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { colors } from '../../styles';
import { Entypo } from '@expo/vector-icons';
import { screens } from '../../navigation/screens';
import { useStore } from '../../stores/CreateStore';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { Products } from '../../components/Products/Products';

function ProfileScreen() {
  const placeHolderImg =
    'https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar.png';
  const nav = useNavigation();
  function onPressSettings() {
    nav.navigate(screens.Settings);
  }
  const { viewer, ownProducts } = useStore();
  if (!viewer.isLoggedIn) {
    nav.navigate(screens.Settings);
  }

  useEffect(() => {
    ownProducts.fetchOwnProducts.run(viewer?.userModel?.id);
    console.log(ownProducts.items);
  }, []);

  return (
    <View style={s.mainContainer}>
      <Touchable style={s.settings} onPress={onPressSettings}>
        <View>
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </View>
      </Touchable>
      {viewer.isLoggedIn ? (
        <View style={s.container}>
          <View style={s.viewerContainer}>
            <Image
              style={s.imgContainer}
              source={{
                // uri: viewer.userModel.avatar
                //   ? viewer.userModel.avatar
                //   : placeHolderImg,
                uri: placeHolderImg,
              }}
            />
            <Text>{viewer.userModel.fullName}</Text>
          </View>

          <View>
            <FlatList
              style={[s.content, { flex: 1 }]}
              contentContainerStyle={{ flexGrow: 1 }}
              renderItem={({ item }) => <Products item={item} />}
              numColumns={2}
              // refreshing={store.latestProducts.fetchLatest.isLoading}
              // onRefresh={() => ownProducts.fetchOwnProducts.run()}
              keyExtractor={(item) => item.id}
              // onEndReached={() => store.latestProducts.fetchMore.run()}
              // onEndReachedThreshold={0.3}
              data={ownProducts.items}
            />
          </View>
          {/* <AntDesign name="dropbox" size={62} color="black" />
          <Text>User doesn’t sell anything yet</Text> */}
        </View>
      ) : null}
    </View>
  );
}

export default observer(ProfileScreen);
