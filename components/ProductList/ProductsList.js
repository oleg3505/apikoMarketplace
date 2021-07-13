import React from 'react';
import T from 'prop-types';
import { observer } from 'mobx-react';
import { FlatList, View, Text } from 'react-native';
import { Products } from '../Products/Products';
import s from './styles';

function ProductList({ style, store, ...props }) {
  return (
    <View style={s.mainContainer}>
      <Text>Browse Screen</Text>

      <FlatList
        style={[s.content, { backgroundColor: 'red', flex: 1 }]}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({ item }) => <Products item={item} />}
        numColumns={2}
        data={store}
      />
      <Text>123</Text>
    </View>
  );
}

export default observer(ProductList);
