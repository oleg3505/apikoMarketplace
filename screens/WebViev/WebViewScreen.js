import React from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';

function WebViewScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'green' }}>
      <WebView
        source={{ uri: 'https://reactnative.dev/docs/linking' }}
        // style={{
        //   marginTop: 20,
        //   flex: 1,
        //   backgroundColor: 'red',
        //   top: 0,
        //   right: 0,
        //   bottom: 0,
        //   left: 0,
        //   position: 'absolute',
        // }}
        // containerStyle={{ flexGrow: 1 }}
      />
    </View>
  );
}

export default WebViewScreen;
