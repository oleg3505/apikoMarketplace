import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { useState } from 'react';
import s from './styles';

import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { screens } from '../../navigation/screens';
import { useStore } from '../../stores/CreateStore';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { Products } from '../../components/Products/Products';

function ProfileScreen() {
  const placeHolderImg =
    'https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar.png';
  const nav = useNavigation();
  // function onPressSettings() {
  //   nav.navigate(screens.Settings);
  // }
  const { viewer, ownProducts } = useStore();
  if (!viewer.isLoggedIn) {
    nav.navigate(screens.Settings);
  }

  useEffect(() => {
    ownProducts.fetchOwnProducts.run();
  }, []);

  return (
    <View style={s.mainContainer}>
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

          <View style={{ flex: 1 }}>
            <FlatList
              style={[s.content, { flex: 1 }]}
              contentContainerStyle={{ flexGrow: 1 }}
              renderItem={({ item }) => <Products item={item} />}
              numColumns={2}
              refreshing={ownProducts.fetchOwnProducts.isLoading}
              onRefresh={() => ownProducts.fetchOwnProducts.run()}
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
