import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  var testVar = {
    'key': 'value',
    'str': 'Tec',
    'num': 730,
  };

  var testVar1 = {
    'key': 'value',
    'str': 'tec',
    'num': 731,
  };

  var testVar3 = [testVar, testVar1]

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your {testVar3[1].str} app!</Text>
      <Text>Tipo de Variable: {typeof(testVar3.num)}</Text>
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
