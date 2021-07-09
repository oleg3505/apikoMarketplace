import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Api from './api';
import AppNavigation from './navigation/AppNavigation';
import TabNavigation from './navigation/TabNavigation';
import { MainScreen } from './screens';
// import { Provider } from 'mobx-react';
import { createStore, Provider, useStore } from './stores/CreateStore';
import { StackActions } from '@react-navigation/native';
import { screens } from './navigation/screens';
import * as SplashScreen from 'expo-splash-screen';

const store = createStore();

export default function App() {
  const navigationRef = useRef();
  // const { viewer } = useStore();
  useEffect(() => {
    async function awaitBootstrap() {
      await SplashScreen.preventAutoHideAsync();
      const log = await store.bootstrap();

      navigationRef.current?.dispatch(
        StackActions.replace(log ? screens.GuestMode : screens.Main),
      );
      await SplashScreen.hideAsync();
    }
    awaitBootstrap();
  }, []);

  return (
    <View style={styles.container}>
      <Provider value={store}>
        <AppNavigation ref={navigationRef} />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
