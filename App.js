import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Api from './api';
import { AppNavigation } from './navigation/AppNavigation';
import TabNavigation from './navigation/TabNavigation';
import { MainScreen } from './screens';
// import { Provider } from 'mobx-react';
import { createStore, Provider } from './stores/CreateStore';

const store = createStore();

export default function App() {
  useEffect(() => {
    store.bootstrap();
  }, []);

  return (
    <View style={styles.container}>
      <Provider value={store}>
        <AppNavigation />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
