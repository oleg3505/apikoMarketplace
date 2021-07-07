import React from 'react';
import { Touchable } from '../../../../components';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../../../../navigation/screens';

function SettingsButton() {
  const nav = useNavigation();
  function onPressSettings() {
    nav.navigate(screens.Settings);
  }
  return (
    <Touchable style={{ paddingHorizontal: 10 }} onPress={onPressSettings}>
      <Entypo name="dots-three-vertical" size={24} color="black" />
    </Touchable>
  );
}
export default SettingsButton;
