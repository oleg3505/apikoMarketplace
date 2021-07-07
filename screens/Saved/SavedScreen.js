import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useState } from 'react';
import s from './styles';
import { AuthBottom, Touchable } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '../../stores/CreateStore';
import { observer } from 'mobx-react';
import NotLogined from '../../components/NotLogined/NotLogined';
import { AntDesign } from '@expo/vector-icons';
import { useEffect } from 'react';
import { Products } from '../../components/Products/Products';

function SavedScreen() {
  const { viewer, savedProducts } = useStore();

  useEffect(() => {
    savedProducts.fetchSavedProducts.run();
  }, []);

  if (!viewer.isLoggedIn) {
    return (
      <View style={s.mainContainer}>
        <NotLogined text="Login to save items" />
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={[s.content, { flex: 1 }]}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({ item }) => <Products item={item} />}
        numColumns={2}
        refreshing={savedProducts.fetchSavedProducts.isLoading}
        onRefresh={() => savedProducts.fetchSavedProducts.run()}
        keyExtractor={(item) => item.id}
        data={savedProducts.items}
      />
    </View>
  );
}

export default observer(SavedScreen);
