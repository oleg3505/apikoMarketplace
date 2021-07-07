import React from 'react';
import s from './styles';
import { Text, View, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../../styles';
import { Touchable } from '../../../../components';

function AddImages({ images, onOpenActionSheet }) {
  return (
    <View style={s.addPhotosContainer}>
      <Touchable style={s.addPhoto} onPress={onOpenActionSheet}>
        <Ionicons name="add" size={24} color={colors.grey} />
      </Touchable>
      <FlatList
        horizontal={true}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={s.imageStyle} />
        )}
        keyExtractor={(item) => item}
        data={images}
      />
    </View>
  );
}

export default AddImages;
