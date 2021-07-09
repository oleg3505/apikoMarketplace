import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { useEffect } from 'react';
import { View } from 'react-native';
import { screens } from '../../navigation/screens';
import { useStore } from '../../stores/CreateStore';

function InitScreen() {
  return <View style={{ flex: 1 }}></View>;
}
export default InitScreen;
