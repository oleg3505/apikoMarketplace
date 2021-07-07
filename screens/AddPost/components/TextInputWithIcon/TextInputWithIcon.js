import React from 'react';
import s from './styles';
import { Text, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../../../styles';

function TextInputWithIcon({ iconName, ...res }) {
  return (
    <View style={s.addPriceContainer}>
      <View style={s.priceInputContainer}>
        <TextInput {...res} />
      </View>
      <View>
        <MaterialIcons name={iconName} size={24} color={colors.primary} />
      </View>
    </View>
  );
}

export default TextInputWithIcon;
