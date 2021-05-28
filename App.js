import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { AppNavigation } from './navigation/AppNavigation';
import TabNavigation from './navigation/TabNavigation';
import { MainScreen } from './screens';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MainScreen/> */}
      <AppNavigation />
      {/* <TabNavigation/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
