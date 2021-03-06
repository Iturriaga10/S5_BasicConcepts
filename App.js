import { StatusBar } from 'expo-status-bar';
import React,  {useState} from 'react';
import { Image, View, StyleSheet, Switch } from 'react-native';

export default function App() {

  // Switch 
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  var icon = isEnabled
  ? require('./assets/perro.jpg')
  : require('./assets/perro1.jpg');
  
  
  return (
    
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://image.freepik.com/foto-gratis/retrato-gato-sobre-fondo-blanco_13339-114852.jpg' }} 
        style={styles.image}
        />
      
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    
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
  image:{
    width: 200, 
    height:200
  },
});
