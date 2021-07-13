import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import { useState } from 'react';
import s from './styles';
import { AuthBottom, ProductList, Touchable } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { Products } from '../../components/Products/Products';

import { useStore } from '../../stores/CreateStore';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import ProductsList from '../../components/ProductList/ProductsList';

function BrowseScreen() {
  const store = useStore();
  useEffect(() => {
    store.latestProducts.fetchLatest.run();
  }, []);

  return (
    // <View>
    //   <ProductsList store={store.latestProducts.products} />
    // </View>
    <View style={s.mainContainer}>
      <FlatList
        style={[s.content, { flex: 1 }]}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({ item }) => <Products item={item} />}
        numColumns={2}
        refreshing={store.latestProducts.fetchLatest.isLoading}
        onRefresh={() => store.latestProducts.fetchLatest.run()}
        keyExtractor={(item) => item.id}
        onEndReached={() => store.latestProducts.fetchMore.run()}
        onEndReachedThreshold={0.3}
        data={store.latestProducts.products}
      />
    </View>
  );
}

export default observer(BrowseScreen);
