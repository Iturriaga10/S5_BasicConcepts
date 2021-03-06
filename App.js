import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  var testVar = 'Tec'; // String
  //testVar = "Tec"; // String

  //var testVar = null; // Null
  //testVar = 'TEC'; // String
  //testVar = 5; // Number
  
  //var testVar = undefined; // Undefinded
  //testVar = 'TEC'; // String
  //testVar = 5; // Number

  //var testVar = false; // Boolean

  //var testVar = Symbol("Tec"); // Symbol
  //var testVar1 = Symbol("Tec"); // Symbol
  //console.log(testVar === testVar1)

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
