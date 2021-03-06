import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  var testVar = ['Tec', 'de','Monterrey'];

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your {testVar} app!</Text>
      <Text>Tipo de Variable: {typeof(testVar)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
