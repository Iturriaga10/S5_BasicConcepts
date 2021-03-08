import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const Header = () => {
    return(
        <View style={styles.container}>
            <Image 
              source={require('./assets/icon_dog.png')}
              style={styles.image}
            />
            <Text style={styles.text}>Dogstagram</Text>
      </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row-reverse',
      alignItems: 'center',
      marginTop: 25,
      backgroundColor: 'rgb(17,82,178)',
    },
    text:{
      fontFamily: 'sans-serif-light',
      fontSize: 30,
      color: 'white' 
    },
    image:{
      marginLeft: 16,
      marginRight: 16,
      width: 50, 
      height:50
    },
  });
  